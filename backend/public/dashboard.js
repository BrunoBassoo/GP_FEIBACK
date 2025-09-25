// FEIBACK Student Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Global state
    let currentSection = 'dashboard';
    let currentPoints = 245;
    let selectedMember = null;
    let feedbackRatings = {};
    
    // Initialize dashboard
    initializeDashboard();
    
    function initializeDashboard() {
        setupNavigation();
        setupFeedbackSystem();
        setupRewardsSystem();
        setupModals();
        setupNotifications();
        setupFilters();
        setupProfileEditor();
        setupPublicFeedbacks();
        
        // Show welcome notification
        setTimeout(() => {
            showNotification('Bem-vindo de volta!', 'Você tem 3 feedbacks pendentes.', 'info');
        }, 1000);
    }
    
    // Navigation System
    function setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        const sections = document.querySelectorAll('.content-section');
        const breadcrumb = document.getElementById('breadcrumbText');
        
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                const targetSection = this.dataset.section;
                
                if (targetSection) {
                    // Remove active class from all nav items
                    navItems.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Hide all sections
                    sections.forEach(section => section.classList.remove('active'));
                    
                    // Show target section
                    const targetElement = document.getElementById(targetSection + '-section');
                    console.log('Navigating to:', targetSection, 'Element found:', !!targetElement);
                    if (targetElement) {
                        targetElement.classList.add('active');
                        currentSection = targetSection;
                        
                        // Update breadcrumb
                        const sectionNames = {
                            'dashboard': 'Dashboard',
                            'profile': 'Meu Perfil',
                            'groups': 'Meus Grupos',
                            'give-feedback': 'Dar Feedback',
                            'received-feedback': 'Meus Feedbacks',
                            'public-feedbacks': 'Feedbacks Públicos',
                            'rewards': 'Loja de Recompensas',
                            'history': 'Histórico'
                        };
                        
                        if (breadcrumb) {
                            breadcrumb.textContent = sectionNames[targetSection] || 'Dashboard';
                        }
                        
                        // Animate section entrance
                        animateSection(targetElement);
                    }
                }
            });
        });
        
    }
    
    function animateSection(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 50);
    }
    
    // Feedback System
    function setupFeedbackSystem() {
        // Member selection for feedback
        const evaluateMembers = document.querySelectorAll('.evaluate-member');
        evaluateMembers.forEach(member => {
            member.addEventListener('click', function() {
                evaluateMembers.forEach(m => m.classList.remove('active'));
                this.classList.add('active');
                selectedMember = this.dataset.member;
                updateFeedbackForm();
            });
        });
        
        // Rating stars
        const ratingStars = document.querySelectorAll('.rating-stars');
        ratingStars.forEach(starsContainer => {
            const stars = starsContainer.querySelectorAll('i');
            const criterion = starsContainer.closest('.criterion');
            const criterionName = criterion ? criterion.querySelector('label').textContent : 'overall';
            
            stars.forEach((star, index) => {
                star.addEventListener('click', function() {
                    const rating = index + 1;
                    
                    // Update visual state
                    stars.forEach((s, i) => {
                        if (i < rating) {
                            s.classList.remove('far');
                            s.classList.add('fas', 'active');
                        } else {
                            s.classList.remove('fas', 'active');
                            s.classList.add('far');
                        }
                    });
                    
                    // Store rating
                    if (!feedbackRatings[selectedMember]) {
                        feedbackRatings[selectedMember] = {};
                    }
                    feedbackRatings[selectedMember][criterionName] = rating;
                    
                    // Update overall rating
                    updateOverallRating();
                });
                
                star.addEventListener('mouseenter', function() {
                    const hoverRating = index + 1;
                    stars.forEach((s, i) => {
                        if (i < hoverRating) {
                            s.style.color = '#fbbf24';
                        } else {
                            s.style.color = '#e2e8f0';
                        }
                    });
                });
            });
            
            starsContainer.addEventListener('mouseleave', function() {
                const currentRating = feedbackRatings[selectedMember]?.[criterionName] || 0;
                stars.forEach((s, i) => {
                    if (i < currentRating) {
                        s.style.color = '#fbbf24';
                    } else {
                        s.style.color = '#e2e8f0';
                    }
                });
            });
        });
        
        // Feedback form submission
        const feedbackForm = document.querySelector('.feedback-form');
        if (feedbackForm) {
            feedbackForm.addEventListener('submit', function(e) {
                e.preventDefault();
                showFeedbackModal();
            });
        }
        
        // Quick feedback buttons
        const quickFeedbackBtns = document.querySelectorAll('[onclick*="giveFeedback"]');
        quickFeedbackBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                navigateToSection('give-feedback');
            });
        });
    }
    
    function updateFeedbackForm() {
        if (!selectedMember) return;
        
        // Update form title or member info
        const memberNames = {
            'maria': 'Maria Santos',
            'carlos': 'Carlos Oliveira',
            'ana': 'Ana Costa',
            'pedro': 'Pedro Santos',
            'julia': 'Julia Lima'
        };
        
        // You could update form fields based on selected member here
        console.log(`Feedback form updated for: ${memberNames[selectedMember]}`);
    }
    
    function updateOverallRating() {
        if (!selectedMember || !feedbackRatings[selectedMember]) return;
        
        const ratings = feedbackRatings[selectedMember];
        const values = Object.values(ratings);
        
        if (values.length === 0) return;
        
        const average = values.reduce((sum, rating) => sum + rating, 0) / values.length;
        const roundedAverage = Math.round(average * 10) / 10;
        
        // Update display
        const ratingDisplay = document.querySelector('.rating-display');
        const starsDisplay = document.querySelectorAll('.stars-display i');
        
        if (ratingDisplay) {
            ratingDisplay.textContent = roundedAverage.toFixed(1);
        }
        
        if (starsDisplay.length > 0) {
            starsDisplay.forEach((star, index) => {
                if (index < Math.floor(average)) {
                    star.classList.remove('far');
                    star.classList.add('fas');
                } else if (index < average) {
                    star.classList.remove('far', 'fas');
                    star.classList.add('fas'); // You could add half-star logic here
                } else {
                    star.classList.remove('fas');
                    star.classList.add('far');
                }
            });
        }
    }
    
    // Rewards System
    function setupRewardsSystem() {
        // Category filtering
        const categoryBtns = document.querySelectorAll('.category-btn');
        const rewardCards = document.querySelectorAll('.reward-card');
        
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.dataset.category;
                
                // Update active button
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter rewards
                rewardCards.forEach(card => {
                    const cardCategory = card.dataset.category;
                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.5s ease';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Reward redemption
        const rewardBtns = document.querySelectorAll('[onclick*="redeemReward"]');
        rewardBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const rewardName = this.closest('.reward-card').querySelector('h3').textContent;
                const rewardCost = parseInt(this.closest('.reward-card').querySelector('.reward-price span').textContent.match(/\d+/)[0]);
                
                showRewardModal(rewardName, rewardCost);
            });
        });
    }
    
    // Modal System
    function setupModals() {
        // Close modal when clicking outside
        const modalOverlays = document.querySelectorAll('.modal-overlay');
        modalOverlays.forEach(overlay => {
            overlay.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('show');
                }
            });
        });
        
        // Close buttons
        const closeButtons = document.querySelectorAll('.modal-close');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                this.closest('.modal-overlay').classList.remove('show');
            });
        });
        
        // ESC key to close modals
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                modalOverlays.forEach(overlay => {
                    overlay.classList.remove('show');
                });
            }
        });
    }
    
    function showFeedbackModal() {
        const modal = document.getElementById('feedbackModal');
        if (modal) {
            modal.classList.add('show');
        }
    }
    
    function showRewardModal(name, cost) {
        const modal = document.getElementById('rewardModal');
        const nameElement = document.getElementById('rewardName');
        const costElement = document.getElementById('rewardCost');
        const remainingElement = document.getElementById('remainingBalance');
        
        if (modal && nameElement && costElement && remainingElement) {
            nameElement.textContent = name;
            costElement.textContent = `${cost} pontos`;
            remainingElement.textContent = `${currentPoints - cost} pontos`;
            
            modal.classList.add('show');
        }
    }
    
    // Global modal functions
    window.closeFeedbackModal = function() {
        const modal = document.getElementById('feedbackModal');
        if (modal) {
            modal.classList.remove('show');
        }
    };
    
    window.closeRewardModal = function() {
        const modal = document.getElementById('rewardModal');
        if (modal) {
            modal.classList.remove('show');
        }
    };
    
    window.confirmFeedback = function() {
        closeFeedbackModal();
        
        // Simulate feedback submission
        setTimeout(() => {
            showNotification('Feedback enviado!', 'Você ganhou +5 pontos por dar feedback.', 'success');
            currentPoints += 5;
            updatePointsDisplay();
            
            // Navigate back to dashboard
            setTimeout(() => {
                navigateToSection('dashboard');
            }, 2000);
        }, 500);
    };
    
    window.confirmReward = function() {
        const rewardName = document.getElementById('rewardName').textContent;
        const rewardCost = parseInt(document.getElementById('rewardCost').textContent.match(/\d+/)[0]);
        
        closeRewardModal();
        
        // Simulate reward redemption
        setTimeout(() => {
            currentPoints -= rewardCost;
            updatePointsDisplay();
            showNotification('Recompensa resgatada!', `${rewardName} foi adicionado à sua conta.`, 'success');
            
            // Add to history (simulated)
            addToHistory('reward', rewardName, -rewardCost);
        }, 500);
    };
    
    // Global functions for buttons
    window.redeemReward = function(rewardId, cost) {
        const rewardNames = {
            'coffee': 'Café Grátis',
            'lunch': 'Desconto no Almoço',
            'library': 'Acesso Biblioteca Premium',
            'print': 'Créditos de Impressão',
            'cinema': 'Ingresso Cinema',
            'games': 'Sala de Jogos'
        };
        
        showRewardModal(rewardNames[rewardId], cost);
    };
    
    window.giveFeedback = function(projectId) {
        navigateToSection('give-feedback');
    };
    
    window.giveFeedbackToMember = function(memberId) {
        navigateToSection('give-feedback');
        
        // Select the member after navigation
        setTimeout(() => {
            const memberElement = document.querySelector(`[data-member="${memberId}"]`);
            if (memberElement) {
                memberElement.click();
            }
        }, 100);
    };
    
    window.logout = function() {
        if (confirm('Tem certeza de que deseja sair?')) {
            showNotification('Logout realizado', 'Até logo!', 'info');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        }
    };
    
    // Notification System
    function setupNotifications() {
        // Notification button
        const notificationBtn = document.getElementById('notificationsBtn');
        if (notificationBtn) {
            notificationBtn.addEventListener('click', function() {
                // Toggle notifications dropdown (simulated)
                showNotification('Notificações', 'Você tem 3 notificações não lidas.', 'info');
            });
        }
    }
    
    function showNotification(title, message, type = 'info') {
        const container = document.getElementById('notificationContainer');
        if (!container) return;
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icons = {
            'success': 'fas fa-check-circle',
            'error': 'fas fa-exclamation-circle',
            'info': 'fas fa-info-circle',
            'warning': 'fas fa-exclamation-triangle'
        };
        
        notification.innerHTML = `
            <i class="${icons[type] || icons.info}"></i>
            <div class="notification-content">
                <div class="notification-title">${title}</div>
                <div class="notification-message">${message}</div>
            </div>
        `;
        
        container.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }
    
    // Filters System
    function setupFilters() {
        const filterSelects = document.querySelectorAll('.filter-select');
        filterSelects.forEach(select => {
            select.addEventListener('change', function() {
                // Simulate filtering (in real app, this would filter the data)
                console.log(`Filter changed: ${this.value}`);
                
                // Add loading animation
                const timeline = document.querySelector('.history-timeline');
                if (timeline) {
                    timeline.style.opacity = '0.5';
                    setTimeout(() => {
                        timeline.style.opacity = '1';
                        showNotification('Filtros aplicados', 'Histórico atualizado.', 'info');
                    }, 800);
                }
            });
        });
    }
    
    // Public Feedbacks System
    function setupPublicFeedbacks() {
        // Public feedback filters
        const publicFeedbackFilter = document.getElementById('publicFeedbackFilter');
        const projectFilter = document.getElementById('projectFilter');
        const studentSearch = document.getElementById('studentSearch');
        
        if (publicFeedbackFilter) {
            publicFeedbackFilter.addEventListener('change', function() {
                filterPublicFeedbacks();
            });
        }
        
        if (projectFilter) {
            projectFilter.addEventListener('change', function() {
                filterPublicFeedbacks();
            });
        }
        
        if (studentSearch) {
            studentSearch.addEventListener('input', function() {
                filterPublicFeedbacks();
            });
        }
        
        // Load more button
        const loadMoreBtn = document.querySelector('.load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', function() {
                // Simulate loading more feedbacks
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...';
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-chevron-down"></i> Carregar Mais Feedbacks';
                    showNotification('Mais feedbacks carregados', 'Novos feedbacks foram adicionados à lista.', 'info');
                }, 1500);
            });
        }
    }
    
    function filterPublicFeedbacks() {
        const feedbackItems = document.querySelectorAll('.public-feedback-item');
        const filterValue = document.getElementById('publicFeedbackFilter')?.value;
        const projectValue = document.getElementById('projectFilter')?.value;
        const searchValue = document.getElementById('studentSearch')?.value.toLowerCase();
        
        feedbackItems.forEach(item => {
            let shouldShow = true;
            
            // Filter by search term
            if (searchValue) {
                const participantNames = item.querySelectorAll('.participant-name');
                const hasMatch = Array.from(participantNames).some(name => 
                    name.textContent.toLowerCase().includes(searchValue)
                );
                if (!hasMatch) shouldShow = false;
            }
            
            // Filter by rating (high-rated)
            if (filterValue === 'high-rated') {
                const ratingValue = parseFloat(item.querySelector('.rating-value')?.textContent || '0');
                if (ratingValue < 4.0) shouldShow = false;
            }
            
            // Filter by project
            if (projectValue && projectValue !== 'all') {
                const projectName = item.querySelector('.project-name')?.textContent.toLowerCase();
                const projectMap = {
                    'web-dev': 'web development',
                    'mobile-app': 'mobile app',
                    'data-science': 'data science',
                    'ai-project': 'projeto ia'
                };
                
                if (!projectName?.includes(projectMap[projectValue] || projectValue)) {
                    shouldShow = false;
                }
            }
            
            // Show/hide item with animation
            if (shouldShow) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.5s ease';
            } else {
                item.style.display = 'none';
            }
        });
        
        // Show notification about filtering
        const visibleItems = Array.from(feedbackItems).filter(item => item.style.display !== 'none').length;
        if (searchValue || filterValue !== 'all' || projectValue !== 'all') {
            showNotification('Filtros aplicados', `${visibleItems} feedbacks encontrados.`, 'info');
        }
    }
    
    // Profile Editor
    function setupProfileEditor() {
        const editBtn = document.getElementById('editProfileBtn');
        if (editBtn) {
            editBtn.addEventListener('click', function() {
                // Toggle edit mode (simulated)
                const isEditing = this.textContent.includes('Salvar');
                
                if (isEditing) {
                    this.innerHTML = '<i class="fas fa-edit"></i> Editar Perfil';
                    showNotification('Perfil atualizado', 'Suas informações foram salvas.', 'success');
                } else {
                    this.innerHTML = '<i class="fas fa-save"></i> Salvar Alterações';
                    showNotification('Modo de edição', 'Agora você pode editar suas informações.', 'info');
                }
            });
        }
        
        // Avatar upload simulation
        const avatarEditBtn = document.querySelector('.avatar-edit-btn');
        if (avatarEditBtn) {
            avatarEditBtn.addEventListener('click', function() {
                // Simulate file picker
                showNotification('Upload de avatar', 'Funcionalidade em desenvolvimento.', 'info');
            });
        }
    }
    
    // Points calculation based on feedback ratings
    function calculatePointsFromRating(rating) {
        // Points formula: base 10 points + (rating * 5) rounded
        // 5.0 stars = 10 + (5.0 * 5) = 35 points max
        // 4.0 stars = 10 + (4.0 * 5) = 30 points  
        // 3.0 stars = 10 + (3.0 * 5) = 25 points
        // 2.0 stars = 10 + (2.0 * 5) = 20 points
        // 1.0 stars = 10 + (1.0 * 5) = 15 points
        const basePoints = 10;
        const ratingMultiplier = 5;
        return Math.round(basePoints + (rating * ratingMultiplier));
    }
    
    // Simulate receiving feedback with points
    function simulateReceiveFeedback(fromStudent, rating, project) {
        const pointsEarned = calculatePointsFromRating(rating);
        currentPoints += pointsEarned;
        updatePointsDisplay();
        
        showNotification(
            'Novo feedback recebido!', 
            `Você recebeu ${rating}⭐ de ${fromStudent} e ganhou +${pointsEarned} pontos!`, 
            'success'
        );
        
        // Add to history
        addToHistory('received-feedback', `Feedback de ${fromStudent} (${rating}⭐)`, pointsEarned);
    }
    
    // Utility Functions
    function updatePointsDisplay() {
        const pointsElements = document.querySelectorAll('.points-count');
        pointsElements.forEach(element => {
            // Animate the change
            element.style.transform = 'scale(1.2)';
            element.style.color = '#10b981';
            
            setTimeout(() => {
                element.textContent = currentPoints;
                element.style.transform = 'scale(1)';
                element.style.color = '';
            }, 200);
        });
        
        // Update other points displays
        const balanceElements = document.querySelectorAll('[id="remainingBalance"]');
        balanceElements.forEach(element => {
            element.textContent = `${currentPoints} pontos`;
        });
    }
    
    function navigateToSection(sectionName) {
        const navItem = document.querySelector(`[data-section="${sectionName}"]`);
        console.log('Navigate to section:', sectionName, 'Nav item found:', !!navItem);
        if (navItem) {
            navItem.click();
        } else {
            // Direct navigation if nav item not found
            const sections = document.querySelectorAll('.content-section');
            const targetElement = document.getElementById(sectionName + '-section');
            console.log('Direct navigation to:', sectionName, 'Element found:', !!targetElement);
            
            if (targetElement) {
                sections.forEach(section => section.classList.remove('active'));
                targetElement.classList.add('active');
                
                // Update nav items
                const navItems = document.querySelectorAll('.nav-item');
                navItems.forEach(nav => nav.classList.remove('active'));
                const targetNav = document.querySelector(`[data-section="${sectionName}"]`);
                if (targetNav) {
                    targetNav.classList.add('active');
                }
                
                // Update breadcrumb
                const breadcrumb = document.getElementById('breadcrumbText');
                const sectionNames = {
                    'dashboard': 'Dashboard',
                    'profile': 'Meu Perfil',
                    'groups': 'Meus Grupos',
                    'give-feedback': 'Dar Feedback',
                    'received-feedback': 'Meus Feedbacks',
                    'public-feedbacks': 'Feedbacks Públicos',
                    'rewards': 'Loja de Recompensas',
                    'history': 'Histórico'
                };
                
                if (breadcrumb) {
                    breadcrumb.textContent = sectionNames[sectionName] || 'Dashboard';
                }
                
                animateSection(targetElement);
            }
        }
    }
    
    // Make navigateToSection available globally
    window.navigateToSection = navigateToSection;
    
    function addToHistory(type, description, points) {
        // In a real app, this would add to the database
        console.log(`History entry: ${type} - ${description} - ${points} points`);
    }
    
    // Responsive behavior
    function setupResponsive() {
        const sidebar = document.getElementById('sidebar');
        const hamburger = document.createElement('button');
        hamburger.className = 'mobile-menu-btn';
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        hamburger.style.cssText = `
            display: none;
            position: fixed;
            top: 15px;
            left: 15px;
            z-index: 1001;
            background: var(--primary-blue);
            color: white;
            border: none;
            border-radius: 8px;
            padding: 10px;
            cursor: pointer;
        `;
        
        document.body.appendChild(hamburger);
        
        hamburger.addEventListener('click', function() {
            sidebar.classList.toggle('show');
        });
        
        // Show/hide hamburger based on screen size
        function checkScreenSize() {
            if (window.innerWidth <= 1200) {
                hamburger.style.display = 'block';
            } else {
                hamburger.style.display = 'none';
                sidebar.classList.remove('show');
            }
        }
        
        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();
    }
    
    setupResponsive();
    
    // Animation helpers
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Initialize counter animations for dashboard stats
    function initializeCounters() {
        const counters = document.querySelectorAll('.stat-content h3');
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            counter.textContent = '0';
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateValue(counter, 0, target, 2000);
                        observer.unobserve(counter);
                    }
                });
            });
            
            observer.observe(counter);
        });
    }
    
    // Initialize animations when dashboard section is active
    setTimeout(initializeCounters, 500);
    
    // Add smooth transitions to all interactive elements
    const interactiveElements = document.querySelectorAll('button, .nav-item, .reward-card, .group-card, .activity-item');
    interactiveElements.forEach(element => {
        element.style.transition = 'all 0.3s ease';
    });
    
    console.log('FEIBACK Student Dashboard initialized successfully! 🎓');
});

// CSS animations keyframes
const additionalStyles = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }
    
    @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            transform: translate3d(0,0,0);
        }
        40%, 43% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -30px, 0);
        }
        70% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -15px, 0);
        }
        90% {
            transform: translate3d(0,-4px,0);
        }
    }
    
    .animate-bounce {
        animation: bounce 1s ease-in-out;
    }
    
    .mobile-menu-btn:hover {
        background: var(--dark-blue) !important;
        transform: scale(1.05);
    }
    
    .sidebar.show {
        animation: slideIn 0.3s ease;
    }
    
    .reward-card:hover .reward-image {
        transform: scale(1.1) rotate(5deg);
    }
    
    .group-card:hover .group-progress .progress-fill {
        animation: bounce 0.6s ease;
    }
    
    .stat-card:hover .stat-icon {
        animation: bounce 0.6s ease;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
