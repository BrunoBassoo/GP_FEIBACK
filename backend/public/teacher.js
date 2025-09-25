// FEIBACK Teacher Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Global state
    let currentSection = 'dashboard';
    let currentFormData = {};
    let draggedElement = null;
    
    // Initialize teacher dashboard
    initializeTeacherDashboard();
    
    function initializeTeacherDashboard() {
        setupNavigation();
        setupFormBuilder();
        setupFormManagement();
        setupGroupManagement();
        setupAnalytics();
        setupStudentsManagement();
        setupReports();
        setupModals();
        setupNotifications();
        
        // Show welcome notification
        setTimeout(() => {
            showNotification('Bem-vindo!', 'Você tem 5 novas notificações.', 'info');
        }, 1000);
    }
    
    // Navigation System (reusing from student dashboard with modifications)
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
                            'form-builder': 'Criar Formulário',
                            'forms': 'Meus Formulários',
                            'groups': 'Gerenciar Grupos',
                            'students': 'Estudantes',
                            'analytics': 'Análises',
                            'reports': 'Relatórios',
                            'settings': 'Configurações'
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
    
    // Form Builder System
    function setupFormBuilder() {
        const elements = document.querySelectorAll('.element-item');
        const canvas = document.getElementById('formCanvas');
        
        // Make elements draggable
        elements.forEach(element => {
            element.addEventListener('dragstart', function(e) {
                draggedElement = this.dataset.type;
                e.dataTransfer.effectAllowed = 'copy';
            });
        });
        
        // Canvas drop functionality
        if (canvas) {
            canvas.addEventListener('dragover', function(e) {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'copy';
                this.style.background = 'rgba(14, 111, 169, 0.05)';
            });
            
            canvas.addEventListener('dragleave', function() {
                this.style.background = '';
            });
            
            canvas.addEventListener('drop', function(e) {
                e.preventDefault();
                this.style.background = '';
                
                if (draggedElement) {
                    addElementToForm(draggedElement);
                    draggedElement = null;
                }
            });
        }
        
        // Form actions
        setupFormActions();
    }
    
    function addElementToForm(elementType) {
        const canvas = document.getElementById('formCanvas');
        const placeholder = canvas.querySelector('.canvas-placeholder');
        
        // Remove placeholder if it exists
        if (placeholder) {
            placeholder.remove();
        }
        
        // Create element based on type
        const elementDiv = document.createElement('div');
        elementDiv.className = 'form-element';
        elementDiv.innerHTML = getElementHTML(elementType);
        
        canvas.appendChild(elementDiv);
        
        // Add edit functionality
        elementDiv.addEventListener('click', function() {
            editFormElement(this, elementType);
        });
        
        showNotification('Elemento adicionado', `${getElementName(elementType)} foi adicionado ao formulário.`, 'success');
    }
    
    function getElementHTML(type) {
        const templates = {
            'rating': `
                <div class="element-header">
                    <h4>Avaliação por Estrelas</h4>
                    <div class="element-actions">
                        <button class="edit-element"><i class="fas fa-edit"></i></button>
                        <button class="delete-element"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                <div class="element-content">
                    <label>Como você avalia este critério?</label>
                    <div class="rating-stars">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            `,
            'scale': `
                <div class="element-header">
                    <h4>Escala Numérica</h4>
                    <div class="element-actions">
                        <button class="edit-element"><i class="fas fa-edit"></i></button>
                        <button class="delete-element"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                <div class="element-content">
                    <label>Avalie de 1 a 10:</label>
                    <input type="range" min="1" max="10" value="5" class="scale-input">
                    <div class="scale-labels">
                        <span>1</span>
                        <span>10</span>
                    </div>
                </div>
            `,
            'text': `
                <div class="element-header">
                    <h4>Campo de Texto</h4>
                    <div class="element-actions">
                        <button class="edit-element"><i class="fas fa-edit"></i></button>
                        <button class="delete-element"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                <div class="element-content">
                    <label>Sua resposta:</label>
                    <input type="text" placeholder="Digite sua resposta..." class="text-input">
                </div>
            `,
            'textarea': `
                <div class="element-header">
                    <h4>Área de Texto</h4>
                    <div class="element-actions">
                        <button class="edit-element"><i class="fas fa-edit"></i></button>
                        <button class="delete-element"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                <div class="element-content">
                    <label>Comentários detalhados:</label>
                    <textarea placeholder="Escreva seus comentários..." class="textarea-input"></textarea>
                </div>
            `,
            'multiple': `
                <div class="element-header">
                    <h4>Múltipla Escolha</h4>
                    <div class="element-actions">
                        <button class="edit-element"><i class="fas fa-edit"></i></button>
                        <button class="delete-element"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                <div class="element-content">
                    <label>Selecione uma opção:</label>
                    <div class="multiple-options">
                        <label><input type="radio" name="option"> Excelente</label>
                        <label><input type="radio" name="option"> Bom</label>
                        <label><input type="radio" name="option"> Regular</label>
                        <label><input type="radio" name="option"> Ruim</label>
                    </div>
                </div>
            `,
            'checkbox': `
                <div class="element-header">
                    <h4>Checkbox</h4>
                    <div class="element-actions">
                        <button class="edit-element"><i class="fas fa-edit"></i></button>
                        <button class="delete-element"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                <div class="element-content">
                    <label>Marque todas que se aplicam:</label>
                    <div class="checkbox-options">
                        <label><input type="checkbox"> Pontualidade</label>
                        <label><input type="checkbox"> Qualidade</label>
                        <label><input type="checkbox"> Colaboração</label>
                        <label><input type="checkbox"> Criatividade</label>
                    </div>
                </div>
            `
        };
        
        return templates[type] || '';
    }
    
    function getElementName(type) {
        const names = {
            'rating': 'Avaliação por Estrelas',
            'scale': 'Escala Numérica',
            'text': 'Campo de Texto',
            'textarea': 'Área de Texto',
            'multiple': 'Múltipla Escolha',
            'checkbox': 'Checkbox'
        };
        
        return names[type] || 'Elemento';
    }
    
    function editFormElement(element, type) {
        // Simple edit functionality - in real app this would open a detailed editor
        const label = element.querySelector('label');
        if (label) {
            const newLabel = prompt('Digite o novo texto da pergunta:', label.textContent);
            if (newLabel) {
                label.textContent = newLabel;
                showNotification('Elemento atualizado', 'A pergunta foi atualizada com sucesso.', 'success');
            }
        }
    }
    
    function setupFormActions() {
        // Form builder actions
        window.previewForm = function() {
            showNotification('Visualização', 'Abrindo visualização do formulário...', 'info');
        };
        
        window.saveForm = function() {
            const formName = document.getElementById('formName')?.value;
            if (!formName) {
                showNotification('Erro', 'Digite um nome para o formulário.', 'error');
                return;
            }
            
            showNotification('Formulário salvo', 'Seu formulário foi salvo como rascunho.', 'success');
        };
        
        window.publishForm = function(formId) {
            if (formId) {
                showNotification('Formulário publicado', 'O formulário está agora ativo para os estudantes.', 'success');
            } else {
                const formName = document.getElementById('formName')?.value;
                if (!formName) {
                    showNotification('Erro', 'Digite um nome para o formulário.', 'error');
                    return;
                }
                
                showNotification('Formulário publicado', 'Seu formulário foi publicado com sucesso!', 'success');
                setTimeout(() => {
                    navigateToSection('forms');
                }, 2000);
            }
        };
    }
    
    // Form Management
    function setupFormManagement() {
        // Form actions
        window.editForm = function(formId) {
            showNotification('Editando formulário', 'Carregando editor...', 'info');
            navigateToSection('form-builder');
        };
        
        window.viewResults = function(formId) {
            showNotification('Carregando resultados', 'Preparando análises do formulário...', 'info');
            navigateToSection('analytics');
        };
        
        window.duplicateForm = function(formId) {
            showNotification('Formulário duplicado', 'Uma cópia foi criada nos seus rascunhos.', 'success');
        };
        
        window.shareForm = function(formId) {
            const url = `${window.location.origin}/form/${formId}`;
            navigator.clipboard.writeText(url).then(() => {
                showNotification('Link copiado', 'Link do formulário copiado para a área de transferência.', 'success');
            });
        };
        
        window.archiveForm = function(formId) {
            if (confirm('Tem certeza de que deseja arquivar este formulário?')) {
                showNotification('Formulário arquivado', 'O formulário foi movido para arquivos.', 'info');
            }
        };
        
        window.deleteForm = function(formId) {
            if (confirm('Tem certeza de que deseja excluir este formulário? Esta ação não pode ser desfeita.')) {
                showNotification('Formulário excluído', 'O formulário foi excluído permanentemente.', 'success');
            }
        };
        
        window.exportResults = function(formId) {
            showNotification('Exportando dados', 'Preparando arquivo para download...', 'info');
        };
        
        // Search and filter
        const searchInput = document.getElementById('formsSearch');
        const filterSelect = document.getElementById('formsFilter');
        
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                filterForms();
            });
        }
        
        if (filterSelect) {
            filterSelect.addEventListener('change', function() {
                filterForms();
            });
        }
    }
    
    function filterForms() {
        const searchTerm = document.getElementById('formsSearch')?.value.toLowerCase();
        const filterValue = document.getElementById('formsFilter')?.value;
        const formCards = document.querySelectorAll('.form-card');
        
        formCards.forEach(card => {
            let shouldShow = true;
            
            // Search filter
            if (searchTerm) {
                const title = card.querySelector('h3')?.textContent.toLowerCase();
                const description = card.querySelector('p')?.textContent.toLowerCase();
                if (!title?.includes(searchTerm) && !description?.includes(searchTerm)) {
                    shouldShow = false;
                }
            }
            
            // Status filter
            if (filterValue && filterValue !== 'all') {
                if (!card.classList.contains(filterValue)) {
                    shouldShow = false;
                }
            }
            
            card.style.display = shouldShow ? 'block' : 'none';
        });
    }
    
    // Group Management
    function setupGroupManagement() {
        window.createNewGroup = function() {
            showModal('createGroupModal');
        };
        
        window.importStudents = function() {
            showNotification('Importar estudantes', 'Funcionalidade em desenvolvimento.', 'info');
        };
        
        window.manageGroup = function(groupId) {
            showNotification('Gerenciando grupo', `Carregando detalhes do grupo ${groupId}...`, 'info');
        };
        
        window.editGroup = function(groupId) {
            showNotification('Editando grupo', 'Carregando editor de grupo...', 'info');
        };
        
        window.assignFeedbackForm = function(groupId) {
            showNotification('Atribuindo formulário', 'Selecionando formulário para o grupo...', 'info');
        };
        
        window.viewGroupAnalytics = function(groupId) {
            navigateToSection('analytics');
            showNotification('Análises do grupo', 'Carregando análises específicas do grupo...', 'info');
        };
        
        window.viewStudentProfile = function(studentId) {
            showNotification('Perfil do estudante', `Carregando perfil de ${studentId}...`, 'info');
        };
        
        window.removeFromGroup = function(studentId, groupId) {
            if (confirm('Tem certeza de que deseja remover este estudante do grupo?')) {
                showNotification('Estudante removido', 'O estudante foi removido do grupo.', 'info');
            }
        };
        
        window.addMemberToGroup = function(groupId) {
            showNotification('Adicionar membro', 'Abrindo seletor de estudantes...', 'info');
        };
        
        window.createGroup = function() {
            closeModal('createGroupModal');
            showNotification('Grupo criado', 'O novo grupo foi criado com sucesso!', 'success');
        };
    }
    
    // Analytics
    function setupAnalytics() {
        // Simulate chart initialization
        const chartCanvas = document.getElementById('participationChart');
        if (chartCanvas) {
            const ctx = chartCanvas.getContext('2d');
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(0, 0, chartCanvas.width, chartCanvas.height);
            ctx.fillStyle = '#6b7280';
            ctx.font = '16px Inter';
            ctx.textAlign = 'center';
            ctx.fillText('Gráfico de Participação', chartCanvas.width / 2, chartCanvas.height / 2);
        }
        
        // Analytics filters
        const timeframeSelect = document.getElementById('analyticsTimeframe');
        if (timeframeSelect) {
            timeframeSelect.addEventListener('change', function() {
                showNotification('Filtros aplicados', 'Atualizando dados analíticos...', 'info');
            });
        }
        
        window.exportAnalytics = function() {
            showNotification('Exportando análises', 'Preparando relatório para download...', 'info');
        };
        
        // Performance filters
        const performanceFilters = document.querySelectorAll('[data-metric]');
        performanceFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                performanceFilters.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
                
                const metric = this.dataset.metric;
                showNotification('Métrica alterada', `Exibindo dados de ${metric}...`, 'info');
            });
        });
        
        // Activity filters
        const activityFilters = document.querySelectorAll('.filter-btn');
        activityFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                activityFilters.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
                
                const filterType = this.dataset.filter;
                filterActivity(filterType);
            });
        });
    }
    
    function filterActivity(type) {
        const activityItems = document.querySelectorAll('.activity-item');
        
        activityItems.forEach(item => {
            let shouldShow = true;
            
            if (type !== 'all') {
                const iconClass = item.querySelector('.activity-icon').classList;
                const matchesFilter = {
                    'forms': iconClass.contains('form-created') || iconClass.contains('form-completed'),
                    'students': iconClass.contains('student-joined'),
                    'feedback': iconClass.contains('feedback-received')
                };
                
                shouldShow = matchesFilter[type] || false;
            }
            
            item.style.display = shouldShow ? 'flex' : 'none';
        });
    }
    
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
                showNotification('Notificações', 'Você tem 5 notificações não lidas.', 'info');
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
        if (confirm('Tem certeza de que deseja sair?')) {
            showNotification('Logout realizado', 'Até logo, Professor!', 'info');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        }
    };
    
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
    
    // Initialize counter animations for dashboard stats
    function initializeCounters() {
        const counters = document.querySelectorAll('.stat-content h3');
        counters.forEach(counter => {
            const target = parseInt(counter.textContent) || 0;
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
    
    // Students Management
    function setupStudentsManagement() {
        // Student actions
        window.approveStudent = function(studentId) {
            if (confirm('Aprovar este estudante?')) {
                showNotification('Estudante aprovado', 'O estudante foi aprovado e pode acessar a plataforma.', 'success');
                
                // Update UI
                const studentRow = document.querySelector(`[onclick*="${studentId}"]`).closest('.student-row');
                if (studentRow) {
                    studentRow.classList.remove('pending');
                    studentRow.classList.add('active');
                    const statusBadge = studentRow.querySelector('.status-badge');
                    if (statusBadge) {
                        statusBadge.textContent = 'Ativo';
                        statusBadge.className = 'status-badge active';
                    }
                }
            }
        };
        
        window.rejectStudent = function(studentId) {
            if (confirm('Rejeitar este estudante? Esta ação não pode ser desfeita.')) {
                showNotification('Estudante rejeitado', 'O estudante foi rejeitado e notificado.', 'info');
            }
        };
        
        window.viewStudentDetails = function(studentId) {
            showNotification('Carregando perfil', `Abrindo perfil detalhado de ${studentId}...`, 'info');
        };
        
        window.sendMessage = function(studentId) {
            showNotification('Enviar mensagem', 'Abrindo editor de mensagem...', 'info');
        };
        
        window.editStudent = function(studentId) {
            showNotification('Editando estudante', 'Carregando dados para edição...', 'info');
        };
        
        window.assignToGroup = function(studentId) {
            showNotification('Atribuir grupo', 'Selecionando grupo para o estudante...', 'info');
        };
        
        window.viewFeedbackHistory = function(studentId) {
            showNotification('Histórico de feedbacks', 'Carregando histórico completo...', 'info');
        };
        
        window.suspendStudent = function(studentId) {
            if (confirm('Suspender este estudante? Ele não poderá acessar a plataforma.')) {
                showNotification('Estudante suspenso', 'O estudante foi suspenso temporariamente.', 'warning');
            }
        };
        
        window.exportStudents = function() {
            showNotification('Exportando lista', 'Preparando arquivo com dados dos estudantes...', 'info');
        };
        
        window.inviteStudents = function() {
            showNotification('Convidar estudantes', 'Abrindo formulário de convite...', 'info');
        };
        
        // Students filters
        const studentsSearch = document.getElementById('studentsSearch');
        const studentsFilter = document.getElementById('studentsFilter');
        
        if (studentsSearch) {
            studentsSearch.addEventListener('input', function() {
                filterStudents();
            });
        }
        
        if (studentsFilter) {
            studentsFilter.addEventListener('change', function() {
                filterStudents();
            });
        }
    }
    
    function filterStudents() {
        const searchTerm = document.getElementById('studentsSearch')?.value.toLowerCase();
        const filterValue = document.getElementById('studentsFilter')?.value;
        const studentRows = document.querySelectorAll('.student-row');
        
        studentRows.forEach(row => {
            let shouldShow = true;
            
            // Search filter
            if (searchTerm) {
                const name = row.querySelector('.student-info strong')?.textContent.toLowerCase();
                const email = row.querySelector('td:nth-child(2)')?.textContent.toLowerCase();
                if (!name?.includes(searchTerm) && !email?.includes(searchTerm)) {
                    shouldShow = false;
                }
            }
            
            // Status filter
            if (filterValue && filterValue !== 'all') {
                if (!row.classList.contains(filterValue)) {
                    shouldShow = false;
                }
            }
            
            row.style.display = shouldShow ? 'table-row' : 'none';
        });
    }
    
    // Reports System
    function setupReports() {
        window.generateReport = function() {
            const reportBuilder = document.getElementById('reportBuilder');
            if (reportBuilder) {
                reportBuilder.style.display = 'block';
                reportBuilder.scrollIntoView({ behavior: 'smooth' });
            }
        };
        
        window.selectTemplate = function(templateType) {
            const templates = {
                'student-performance': 'Relatório de Desempenho dos Estudantes',
                'feedback-analysis': 'Relatório de Análise de Feedbacks',
                'engagement': 'Relatório de Engajamento da Turma',
                'form-effectiveness': 'Relatório de Eficácia dos Formulários'
            };
            
            showNotification('Template selecionado', `Configurando ${templates[templateType]}...`, 'info');
            
            // Auto-fill report builder
            const reportBuilder = document.getElementById('reportBuilder');
            if (reportBuilder) {
                reportBuilder.style.display = 'block';
                const nameInput = reportBuilder.querySelector('input[type="text"]');
                if (nameInput) {
                    nameInput.value = templates[templateType];
                }
                reportBuilder.scrollIntoView({ behavior: 'smooth' });
            }
        };
        
        window.viewReport = function(reportId) {
            showNotification('Visualizando relatório', 'Abrindo relatório em nova aba...', 'info');
        };
        
        window.downloadReport = function(reportId) {
            showNotification('Download iniciado', 'O relatório está sendo baixado...', 'success');
        };
        
        window.shareReport = function(reportId) {
            const url = `${window.location.origin}/report/${reportId}`;
            navigator.clipboard.writeText(url).then(() => {
                showNotification('Link copiado', 'Link do relatório copiado para a área de transferência.', 'success');
            });
        };
        
        window.duplicateReport = function(reportId) {
            showNotification('Relatório duplicado', 'Uma cópia foi criada com as mesmas configurações.', 'success');
        };
        
        window.scheduleReport = function(reportId) {
            showNotification('Agendar relatório', 'Configurando agendamento automático...', 'info');
        };
        
        window.deleteReport = function(reportId) {
            if (confirm('Tem certeza de que deseja excluir este relatório?')) {
                showNotification('Relatório excluído', 'O relatório foi excluído permanentemente.', 'info');
            }
        };
        
        window.cancelReportBuilder = function() {
            const reportBuilder = document.getElementById('reportBuilder');
            if (reportBuilder) {
                reportBuilder.style.display = 'none';
            }
        };
        
        window.generateCustomReport = function() {
            showNotification('Gerando relatório', 'Processando dados e criando relatório...', 'info');
            
            setTimeout(() => {
                showNotification('Relatório pronto!', 'Seu relatório foi gerado e está disponível para download.', 'success');
                cancelReportBuilder();
            }, 3000);
        };
    }

    console.log('FEIBACK Teacher Dashboard initialized successfully! 👨‍🏫');
});

// Additional CSS for form elements
const formElementStyles = `
    .form-element {
        margin-bottom: 2rem;
        padding: 1.5rem;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        background: var(--white);
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .form-element:hover {
        border-color: var(--primary-blue);
        box-shadow: 0 4px 15px rgba(14, 111, 169, 0.1);
    }
    
    .element-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #e2e8f0;
    }
    
    .element-header h4 {
        margin: 0;
        color: var(--dark-blue);
        font-size: 1rem;
    }
    
    .element-actions {
        display: flex;
        gap: 0.5rem;
    }
    
    .edit-element,
    .delete-element {
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        transition: all 0.3s ease;
    }
    
    .edit-element {
        background: #dbeafe;
        color: #1e40af;
    }
    
    .edit-element:hover {
        background: #1e40af;
        color: white;
    }
    
    .delete-element {
        background: #fee2e2;
        color: #dc2626;
    }
    
    .delete-element:hover {
        background: #dc2626;
        color: white;
    }
    
    .element-content label {
        display: block;
        margin-bottom: 0.75rem;
        font-weight: 500;
        color: var(--text-dark);
    }
    
    .rating-stars {
        display: flex;
        gap: 0.5rem;
    }
    
    .rating-stars i {
        font-size: 1.5rem;
        color: #e2e8f0;
        cursor: pointer;
    }
    
    .scale-input {
        width: 100%;
        margin-bottom: 0.5rem;
    }
    
    .scale-labels {
        display: flex;
        justify-content: space-between;
        font-size: 0.85rem;
        color: var(--text-light);
    }
    
    .text-input,
    .textarea-input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        font-family: inherit;
    }
    
    .textarea-input {
        min-height: 80px;
        resize: vertical;
    }
    
    .multiple-options,
    .checkbox-options {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .multiple-options label,
    .checkbox-options label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: normal;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 6px;
        transition: background 0.3s ease;
    }
    
    .multiple-options label:hover,
    .checkbox-options label:hover {
        background: var(--light-gray);
    }
`;

// Inject form element styles
const styleSheet = document.createElement('style');
styleSheet.textContent = formElementStyles;
document.head.appendChild(styleSheet);
