// FEIBACK Admin Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Global state
    let currentSection = 'dashboard';
    let pendingApprovals = 3;
    let systemMetrics = {};
    
    // Initialize admin dashboard
    initializeAdminDashboard();
    
    function initializeAdminDashboard() {
        setupNavigation();
        setupTeacherApproval();
        setupBenefitsManagement();
        setupUserManagement();
        setupAnalytics();
        setupSystemSettings();
        setupModals();
        setupNotifications();
        
        // Show welcome notification
        setTimeout(() => {
            showNotification('Sistema FEIBACK', 'Bem-vindo ao painel administrativo. Sistema operando normalmente.', 'success');
        }, 1000);
        
        // Check for urgent approvals
        if (pendingApprovals > 0) {
            setTimeout(() => {
                showNotification('Aprovações Pendentes', `Você tem ${pendingApprovals} professores aguardando aprovação.`, 'warning');
            }, 3000);
        }
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
                    if (targetElement) {
                        targetElement.classList.add('active');
                        currentSection = targetSection;
                        
                        // Update breadcrumb
                        const sectionNames = {
                            'dashboard': 'Dashboard',
                            'teacher-approval': 'Aprovar Professores',
                            'benefits': 'Gerenciar Benefícios',
                            'users': 'Gerenciar Usuários',
                            'analytics': 'Analytics da Plataforma',
                            'institutions': 'Instituições',
                            'system': 'Configurações do Sistema',
                            'logs': 'Logs e Auditoria'
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
    
    // Teacher Approval System
    function setupTeacherApproval() {
        window.approveTeacher = function(teacherId) {
            if (confirm('Aprovar este professor? Ele terá acesso completo à plataforma.')) {
                // Update UI
                const approvalItem = document.querySelector(`[onclick*="${teacherId}"]`).closest('.approval-item');
                if (approvalItem) {
                    approvalItem.style.transition = 'all 0.5s ease';
                    approvalItem.style.transform = 'scale(0.95)';
                    approvalItem.style.opacity = '0.5';
                    
                    setTimeout(() => {
                        approvalItem.remove();
                        pendingApprovals--;
                        updatePendingCount();
                        showNotification('Professor aprovado!', 'O professor foi notificado e já pode acessar a plataforma.', 'success');
                    }, 500);
                }
            }
        };
        
        window.rejectTeacher = function(teacherId) {
            const reason = prompt('Motivo da rejeição (será enviado ao professor):');
            if (reason) {
                const approvalItem = document.querySelector(`[onclick*="${teacherId}"]`).closest('.approval-item');
                if (approvalItem) {
                    approvalItem.style.transition = 'all 0.5s ease';
                    approvalItem.style.transform = 'scale(0.95)';
                    approvalItem.style.opacity = '0.5';
                    
                    setTimeout(() => {
                        approvalItem.remove();
                        pendingApprovals--;
                        updatePendingCount();
                        showNotification('Professor rejeitado', 'O professor foi notificado sobre a rejeição.', 'info');
                    }, 500);
                }
            }
        };
        
        window.viewTeacherProfile = function(teacherId) {
            showNotification('Carregando perfil', 'Abrindo perfil detalhado do professor...', 'info');
        };
        
        window.requestMoreInfo = function(teacherId) {
            const info = prompt('Que informações adicionais você precisa?');
            if (info) {
                showNotification('Solicitação enviada', 'O professor foi notificado sobre as informações adicionais necessárias.', 'info');
            }
        };
        
        window.viewDocument = function(docId) {
            showNotification('Abrindo documento', 'Carregando documento em nova aba...', 'info');
        };
    }
    
    function updatePendingCount() {
        const badges = document.querySelectorAll('.nav-badge.urgent, .urgent-badge, .action-badge');
        badges.forEach(badge => {
            if (pendingApprovals > 0) {
                badge.textContent = pendingApprovals;
            } else {
                badge.style.display = 'none';
            }
        });
    }
    
    // Benefits Management
    function setupBenefitsManagement() {
        window.addNewBenefit = function() {
            showModal('benefitModal');
        };
        
        window.addPartner = function() {
            showNotification('Adicionar parceiro', 'Funcionalidade de parceiros em desenvolvimento.', 'info');
        };
        
        window.editBenefit = function(benefitId) {
            showNotification('Editando benefício', `Carregando dados do benefício ${benefitId}...`, 'info');
        };
        
        window.toggleBenefit = function(benefitId) {
            const benefitItem = document.querySelector(`[onclick*="${benefitId}"]`).closest('.benefit-item');
            const statusElement = benefitItem?.querySelector('.benefit-status');
            const toggleBtn = benefitItem?.querySelector(`[onclick*="toggleBenefit('${benefitId}')"]`);
            
            if (statusElement && toggleBtn) {
                const isActive = statusElement.classList.contains('active');
                
                if (isActive) {
                    statusElement.textContent = 'Pausado';
                    statusElement.className = 'benefit-status paused';
                    toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
                    toggleBtn.className = 'btn btn-sm btn-success';
                    showNotification('Benefício pausado', 'O benefício foi pausado e não está mais disponível.', 'info');
                } else {
                    statusElement.textContent = 'Ativo';
                    statusElement.className = 'benefit-status active';
                    toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
                    toggleBtn.className = 'btn btn-sm btn-text';
                    showNotification('Benefício ativado', 'O benefício está novamente disponível para os estudantes.', 'success');
                }
            }
        };
        
        window.managePartner = function(partnerId) {
            showNotification('Gerenciando parceiro', `Carregando dados do parceiro ${partnerId}...`, 'info');
        };
        
        window.saveBenefit = function() {
            closeModal('benefitModal');
            showNotification('Benefício criado!', 'O novo benefício foi adicionado à plataforma.', 'success');
        };
    }
    
    // User Management
    function setupUserManagement() {
        window.createUser = function() {
            showModal('userModal');
        };
        
        window.approveUser = function(userId) {
            if (confirm('Aprovar este usuário?')) {
                const userRow = document.querySelector(`[onclick*="${userId}"]`).closest('.user-row');
                if (userRow) {
                    userRow.classList.remove('pending');
                    userRow.classList.add('active');
                    
                    const statusBadge = userRow.querySelector('.status-badge');
                    if (statusBadge) {
                        statusBadge.textContent = 'Ativo';
                        statusBadge.className = 'status-badge active';
                    }
                    
                    // Update action buttons
                    const actions = userRow.querySelector('.user-actions');
                    if (actions) {
                        actions.innerHTML = `
                            <button class="btn btn-sm btn-outline" onclick="editUser('${userId}')">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn btn-sm btn-outline" onclick="viewUserProfile('${userId}')">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="btn btn-sm btn-warning" onclick="suspendUser('${userId}')">
                                <i class="fas fa-pause"></i>
                            </button>
                        `;
                    }
                    
                    showNotification('Usuário aprovado', 'O usuário foi aprovado e já pode acessar a plataforma.', 'success');
                }
            }
        };
        
        window.rejectUser = function(userId) {
            if (confirm('Rejeitar este usuário? Esta ação não pode ser desfeita.')) {
                const userRow = document.querySelector(`[onclick*="${userId}"]`).closest('.user-row');
                if (userRow) {
                    userRow.remove();
                    showNotification('Usuário rejeitado', 'O usuário foi rejeitado e removido da plataforma.', 'info');
                }
            }
        };
        
        window.editUser = function(userId) {
            showNotification('Editando usuário', `Carregando dados do usuário ${userId}...`, 'info');
        };
        
        window.viewUserProfile = function(userId) {
            showNotification('Visualizando perfil', `Abrindo perfil completo de ${userId}...`, 'info');
        };
        
        window.suspendUser = function(userId) {
            if (confirm('Suspender este usuário? Ele não poderá acessar a plataforma.')) {
                const userRow = document.querySelector(`[onclick*="${userId}"]`).closest('.user-row');
                if (userRow) {
                    const statusBadge = userRow.querySelector('.status-badge');
                    if (statusBadge) {
                        statusBadge.textContent = 'Suspenso';
                        statusBadge.className = 'status-badge inactive';
                    }
                    
                    showNotification('Usuário suspenso', 'O usuário foi suspenso e notificado.', 'warning');
                }
            }
        };
        
        window.createNewUser = function() {
            closeModal('userModal');
            showNotification('Usuário criado!', 'O novo usuário foi criado e notificado.', 'success');
        };
        
        // User role change handler
        const userRoleSelect = document.getElementById('userRole');
        if (userRoleSelect) {
            userRoleSelect.addEventListener('change', function() {
                const studentFields = document.getElementById('studentFields');
                const teacherFields = document.getElementById('teacherFields');
                
                if (this.value === 'student') {
                    if (studentFields) studentFields.style.display = 'block';
                    if (teacherFields) teacherFields.style.display = 'none';
                } else if (this.value === 'teacher') {
                    if (studentFields) studentFields.style.display = 'none';
                    if (teacherFields) teacherFields.style.display = 'block';
                } else {
                    if (studentFields) studentFields.style.display = 'none';
                    if (teacherFields) teacherFields.style.display = 'none';
                }
            });
        }
        
        // User filters
        const usersSearch = document.getElementById('usersSearch');
        const usersRoleFilter = document.getElementById('usersRoleFilter');
        const usersStatusFilter = document.getElementById('usersStatusFilter');
        
        if (usersSearch) {
            usersSearch.addEventListener('input', filterUsers);
        }
        
        if (usersRoleFilter) {
            usersRoleFilter.addEventListener('change', filterUsers);
        }
        
        if (usersStatusFilter) {
            usersStatusFilter.addEventListener('change', filterUsers);
        }
    }
    
    function filterUsers() {
        const searchTerm = document.getElementById('usersSearch')?.value.toLowerCase();
        const roleFilter = document.getElementById('usersRoleFilter')?.value;
        const statusFilter = document.getElementById('usersStatusFilter')?.value;
        const userRows = document.querySelectorAll('.user-row');
        
        userRows.forEach(row => {
            let shouldShow = true;
            
            // Search filter
            if (searchTerm) {
                const name = row.querySelector('.user-info strong')?.textContent.toLowerCase();
                const email = row.querySelector('td:nth-child(2)')?.textContent.toLowerCase();
                if (!name?.includes(searchTerm) && !email?.includes(searchTerm)) {
                    shouldShow = false;
                }
            }
            
            // Role filter
            if (roleFilter && roleFilter !== 'all') {
                if (!row.classList.contains(roleFilter)) {
                    shouldShow = false;
                }
            }
            
            // Status filter
            if (statusFilter && statusFilter !== 'all') {
                if (!row.classList.contains(statusFilter)) {
                    shouldShow = false;
                }
            }
            
            row.style.display = shouldShow ? 'table-row' : 'none';
        });
    }
    
    // Analytics
    function setupAnalytics() {
        // Initialize charts
        const usersChart = document.getElementById('usersGrowthChart');
        if (usersChart) {
            const ctx = usersChart.getContext('2d');
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(0, 0, usersChart.width, usersChart.height);
            ctx.fillStyle = '#6b7280';
            ctx.font = '16px Inter';
            ctx.textAlign = 'center';
            ctx.fillText('Gráfico de Crescimento de Usuários', usersChart.width / 2, usersChart.height / 2);
        }
        
        // Analytics timeframe
        const analyticsTimeframe = document.getElementById('analyticsTimeframe');
        if (analyticsTimeframe) {
            analyticsTimeframe.addEventListener('change', function() {
                showNotification('Período alterado', 'Atualizando dados analíticos...', 'info');
                updateAnalyticsData(this.value);
            });
        }
        
        // Metrics tabs
        const metricTabs = document.querySelectorAll('.metric-tab');
        metricTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                metricTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const metric = this.dataset.metric;
                switchMetricsView(metric);
            });
        });
        
        window.exportPlatformData = function() {
            showNotification('Exportando dados', 'Preparando relatório completo da plataforma...', 'info');
        };
    }
    
    function updateAnalyticsData(timeframe) {
        // Simulate data update based on timeframe
        const metrics = {
            week: { users: '+24', feedbacks: '+156', engagement: '89%' },
            month: { users: '+87', feedbacks: '+624', engagement: '91%' },
            quarter: { users: '+234', feedbacks: '+1847', engagement: '88%' },
            year: { users: '+756', feedbacks: '+5234', engagement: '92%' }
        };
        
        const data = metrics[timeframe] || metrics.month;
        console.log('Analytics updated for:', timeframe, data);
    }
    
    function switchMetricsView(metric) {
        const metricsContent = document.getElementById('usageMetrics');
        if (!metricsContent) return;
        
        // Simulate different metrics views
        const views = {
            usage: 'Métricas de uso da plataforma',
            satisfaction: 'Métricas de satisfação dos usuários',
            financial: 'Métricas financeiras e de recompensas'
        };
        
        showNotification('Métricas alteradas', `Exibindo: ${views[metric]}`, 'info');
    }
    
    // System Settings
    function setupSystemSettings() {
        // Settings save buttons
        const saveButtons = document.querySelectorAll('.settings-form .btn-primary');
        saveButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const settingsCard = this.closest('.settings-card');
                const cardTitle = settingsCard?.querySelector('h3')?.textContent;
                
                showNotification('Configurações salvas', `${cardTitle} foram atualizadas com sucesso.`, 'success');
            });
        });
        
        // Backup button
        const backupBtn = document.querySelector('[onclick*="Backup"]');
        if (backupBtn) {
            backupBtn.addEventListener('click', function() {
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Fazendo Backup...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.innerHTML = 'Fazer Backup Agora';
                    this.disabled = false;
                    showNotification('Backup concluído', 'Backup manual realizado com sucesso.', 'success');
                    
                    // Update backup info
                    const backupDate = document.querySelector('.backup-date');
                    if (backupDate) {
                        const now = new Date();
                        backupDate.textContent = now.toLocaleDateString('pt-BR') + ' ' + now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                    }
                }, 3000);
            });
        }
    }
    
    // System Alerts
    function setupSystemAlerts() {
        window.viewAllAlerts = function() {
            showNotification('Todos os alertas', 'Abrindo painel completo de alertas do sistema.', 'info');
        };
        
        window.resolveAlert = function(alertId) {
            const alertItem = document.querySelector(`[onclick*="${alertId}"]`).closest('.alert-item');
            if (alertItem) {
                alertItem.style.transition = 'all 0.5s ease';
                alertItem.style.opacity = '0.5';
                
                setTimeout(() => {
                    alertItem.remove();
                    showNotification('Alerta resolvido', 'O alerta foi marcado como resolvido.', 'success');
                }, 500);
            }
        };
        
        window.reviewPartnership = function(partnerId) {
            showNotification('Analisando parceria', `Abrindo solicitação de parceria de ${partnerId}...`, 'info');
        };
        
        window.dismissAlert = function(alertId) {
            const alertItem = document.querySelector(`[onclick*="${alertId}"]`).closest('.alert-item');
            if (alertItem) {
                alertItem.remove();
            }
        };
    }
    
    setupSystemAlerts();
    
    // Modal System
    function setupModals() {
        window.showModal = function(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('show');
            }
        };
        
        window.closeModal = function(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('show');
            }
        };
        
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
    
    // Notification System
    function setupNotifications() {
        const notificationBtn = document.getElementById('notificationsBtn');
        if (notificationBtn) {
            notificationBtn.addEventListener('click', function() {
                showSystemNotifications();
            });
        }
    }
    
    function showSystemNotifications() {
        const notifications = [
            { type: 'warning', title: 'Aprovações pendentes', message: '3 professores aguardando aprovação', time: '2h' },
            { type: 'info', title: 'Nova instituição', message: 'UNIFESP solicitou parceria', time: '4h' },
            { type: 'success', title: 'Backup concluído', message: 'Backup automático realizado', time: '6h' },
            { type: 'info', title: 'Novo usuário', message: '5 estudantes se cadastraram hoje', time: '8h' }
        ];
        
        notifications.forEach((notif, index) => {
            setTimeout(() => {
                showNotification(notif.title, notif.message, notif.type);
            }, index * 1000);
        });
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
    
    // Utility Functions
    function navigateToSection(sectionName) {
        const navItem = document.querySelector(`[data-section="${sectionName}"]`);
        if (navItem) {
            navItem.click();
        }
    }
    
    // Make navigateToSection available globally
    window.navigateToSection = navigateToSection;
    
    // Global logout function
    window.logout = function() {
        if (confirm('Tem certeza de que deseja sair do painel administrativo?')) {
            showNotification('Logout realizado', 'Sessão administrativa encerrada com segurança.', 'info');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        }
    };
    
    // System monitoring (simulated)
    function startSystemMonitoring() {
        // Simulate system health checks
        setInterval(() => {
            const systemStatus = document.getElementById('systemStatus');
            if (systemStatus && Math.random() > 0.95) {
                // Simulate occasional system alerts
                const alerts = [
                    'Alto uso de CPU detectado',
                    'Backup automático agendado',
                    'Nova versão disponível',
                    'Manutenção programada em 2 horas'
                ];
                
                const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
                showNotification('Sistema', randomAlert, 'info');
            }
        }, 30000); // Check every 30 seconds
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
    
    // Initialize counter animations
    function initializeCounters() {
        const counters = document.querySelectorAll('.stat-content h3, .overview-content h3');
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/[^\d]/g, '')) || 0;
            if (target > 0) {
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
            }
        });
    }
    
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
    
    setTimeout(initializeCounters, 500);
    startSystemMonitoring();
    
    console.log('FEIBACK Admin Dashboard initialized successfully! 🛡️');
});
