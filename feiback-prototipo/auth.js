// FEIBACK Authentication JavaScript - UI Interactions Only

document.addEventListener('DOMContentLoaded', function() {
    
    // Role selection functionality
    const roleCards = document.querySelectorAll('.role-card');
    const selectedRoleInput = document.getElementById('selectedRole');
    const roleIndicator = document.getElementById('roleIndicator');
    const roleDescription = document.getElementById('roleDescription');
    const academicSection = document.getElementById('academicSection');
    const studentFields = document.getElementById('studentFields');
    const teacherFields = document.getElementById('teacherFields');
    const registrationField = document.getElementById('registrationField');
    const approvalNotice = document.getElementById('approvalNotice');
    const submitBtn = document.getElementById('submitBtn');

    // Role descriptions
    const roleDescriptions = {
        student: 'Preencha os dados para criar sua conta de estudante',
        teacher: 'Preencha os dados para criar sua conta de professor',
        admin: 'Preencha os dados para criar sua conta de administrador'
    };

    // Role icons
    const roleIcons = {
        student: 'fas fa-user-graduate',
        teacher: 'fas fa-chalkboard-teacher',
        admin: 'fas fa-user-shield'
    };

    // Role names
    const roleNames = {
        student: 'Estudante',
        teacher: 'Professor',
        admin: 'Administrador'
    };

    // Handle role selection
    roleCards.forEach(card => {
        card.addEventListener('click', function() {
            const role = this.dataset.role;
            
            // Remove selected class from all cards
            roleCards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class to clicked card
            this.classList.add('selected');
            
            // Update hidden input
            if (selectedRoleInput) {
                selectedRoleInput.value = role;
            }
            
            // Update role indicator
            updateRoleIndicator(role);
            
            // Update form fields based on role
            updateFormFields(role);
            
            // Update description
            if (roleDescription) {
                roleDescription.textContent = roleDescriptions[role];
            }
        });
    });

    function updateRoleIndicator(role) {
        if (!roleIndicator) return;
        
        const iconElement = roleIndicator.querySelector('.role-indicator-icon i');
        const textElement = roleIndicator.querySelector('.role-indicator-text');
        
        if (iconElement) {
            iconElement.className = roleIcons[role];
        }
        
        if (textElement) {
            textElement.textContent = roleNames[role];
        }
        
        roleIndicator.style.display = 'flex';
    }

    function updateFormFields(role) {
        // Hide all role-specific fields first
        if (studentFields) studentFields.style.display = 'none';
        if (teacherFields) teacherFields.style.display = 'none';
        if (registrationField) registrationField.style.display = 'none';
        if (approvalNotice) approvalNotice.style.display = 'none';
        
        // Show academic section for all roles
        if (academicSection) academicSection.style.display = 'block';
        
        // Show specific fields based on role
        if (role === 'student') {
            if (studentFields) studentFields.style.display = 'flex';
            if (registrationField) registrationField.style.display = 'block';
            if (submitBtn) submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> Criar Conta de Estudante';
        } else if (role === 'teacher') {
            if (teacherFields) teacherFields.style.display = 'block';
            if (registrationField) registrationField.style.display = 'block';
            if (approvalNotice) approvalNotice.style.display = 'block';
            if (submitBtn) submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> Solicitar Conta de Professor';
        } else if (role === 'admin') {
            if (academicSection) academicSection.style.display = 'none';
            if (submitBtn) submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> Criar Conta de Admin';
        }
    }

    // Clear role selection
    window.clearRoleSelection = function() {
        roleCards.forEach(card => card.classList.remove('selected'));
        if (selectedRoleInput) selectedRoleInput.value = '';
        if (roleIndicator) roleIndicator.style.display = 'none';
        if (roleDescription) roleDescription.textContent = 'Preencha os dados para criar sua conta no FEIBACK';
        if (academicSection) academicSection.style.display = 'block';
        if (studentFields) studentFields.style.display = 'none';
        if (teacherFields) teacherFields.style.display = 'none';
        if (registrationField) registrationField.style.display = 'none';
        if (approvalNotice) approvalNotice.style.display = 'none';
        if (submitBtn) submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> Criar Conta';
    };

    // Password toggle functionality
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // Password strength indicator
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.getElementById('passwordStrength');
    
    if (passwordInput && passwordStrength) {
        const strengthFill = passwordStrength.querySelector('.strength-fill');
        const strengthText = passwordStrength.querySelector('.strength-text');
        
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            const strength = calculatePasswordStrength(password);
            
            // Update strength bar
            strengthFill.className = 'strength-fill';
            if (strength.score > 0) {
                strengthFill.classList.add(strength.level);
            }
            
            // Update strength text
            strengthText.textContent = strength.text;
        });
    }

    function calculatePasswordStrength(password) {
        if (password.length === 0) {
            return { score: 0, level: '', text: 'Digite uma senha' };
        }
        
        let score = 0;
        let feedback = [];
        
        // Length check
        if (password.length >= 8) score += 1;
        else feedback.push('pelo menos 8 caracteres');
        
        // Uppercase check
        if (/[A-Z]/.test(password)) score += 1;
        else feedback.push('uma letra maiúscula');
        
        // Lowercase check
        if (/[a-z]/.test(password)) score += 1;
        else feedback.push('uma letra minúscula');
        
        // Number check
        if (/\d/.test(password)) score += 1;
        else feedback.push('um número');
        
        // Special character check
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
        else feedback.push('um caractere especial');
        
        const levels = {
            0: { level: '', text: 'Muito fraca' },
            1: { level: 'weak', text: 'Fraca' },
            2: { level: 'weak', text: 'Fraca' },
            3: { level: 'fair', text: 'Razoável' },
            4: { level: 'good', text: 'Boa' },
            5: { level: 'strong', text: 'Forte' }
        };
        
        return { score, ...levels[score] };
    }

    // Password confirmation
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordMatch = document.getElementById('passwordMatch');
    
    if (confirmPasswordInput && passwordMatch && passwordInput) {
        confirmPasswordInput.addEventListener('input', function() {
            const password = passwordInput.value;
            const confirmPassword = this.value;
            
            if (confirmPassword.length === 0) {
                passwordMatch.innerHTML = '';
                passwordMatch.className = 'password-match';
            } else if (password === confirmPassword) {
                passwordMatch.innerHTML = '<i class="fas fa-check"></i>';
                passwordMatch.className = 'password-match match';
            } else {
                passwordMatch.innerHTML = '<i class="fas fa-times"></i>';
                passwordMatch.className = 'password-match no-match';
            }
        });
    }

    // Form submission handling (UI only)
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const successModal = document.getElementById('successModal');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading
            showLoading();
            
            // Simulate login process
            setTimeout(() => {
                hideLoading();
                showNotification('Login realizado com sucesso!', 'success');
                
                // Simulate redirect
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }, 2000);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const role = selectedRoleInput ? selectedRoleInput.value : '';
            
            if (!role) {
                showNotification('Por favor, selecione um tipo de conta.', 'error');
                return;
            }
            
            // Show loading
            showLoading();
            
            // Simulate registration process
            setTimeout(() => {
                hideLoading();
                showSuccessModal(role);
            }, 3000);
        });
    }

    function showLoading() {
        if (loadingOverlay) {
            loadingOverlay.classList.add('show');
        }
    }

    function hideLoading() {
        if (loadingOverlay) {
            loadingOverlay.classList.remove('show');
        }
    }

    function showSuccessModal(role) {
        if (!successModal) return;
        
        const successMessage = document.getElementById('successMessage');
        
        let message = 'Sua conta foi criada com sucesso!';
        
        if (role === 'teacher') {
            message = 'Sua solicitação de conta de professor foi enviada! Aguarde a aprovação de um administrador.';
        } else if (role === 'admin') {
            message = 'Sua conta de administrador foi criada com sucesso!';
        }
        
        if (successMessage) {
            successMessage.textContent = message;
        }
        
        successModal.classList.add('show');
    }

    // Redirect to login
    window.redirectToLogin = function() {
        window.location.href = 'login.html';
    };

    // Close modal when clicking outside
    if (successModal) {
        successModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('show');
            }
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            backgroundColor: type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#0e6fa9',
            color: 'white',
            borderRadius: '12px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
            zIndex: '10002',
            transform: 'translateX(400px)',
            transition: 'transform 0.3s ease',
            maxWidth: '350px'
        });
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 4 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 4000);
    }

    // Form field animations
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input has value on load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });

    // Smooth scroll to form when role is selected
    roleCards.forEach(card => {
        card.addEventListener('click', function() {
            setTimeout(() => {
                const formContainer = document.querySelector('.auth-form-container');
                if (formContainer && window.innerWidth <= 1024) {
                    formContainer.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 300);
        });
    });

    // Auto-resize textareas (if any are added later)
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    });

    // Institution change handler
    const institutionSelect = document.getElementById('institution');
    if (institutionSelect) {
        institutionSelect.addEventListener('change', function() {
            if (this.value === 'other') {
                // Could add a custom input field here
                showNotification('Entre em contato conosco para adicionar sua instituição.', 'info');
            }
        });
    }

    // Add loading states to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.type === 'submit') {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 3000);
            }
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close modals
            if (successModal && successModal.classList.contains('show')) {
                successModal.classList.remove('show');
            }
        }
    });

    // Add entrance animations
    const animatedElements = document.querySelectorAll('.auth-form-wrapper, .role-selection, .illustration-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Initialize page
    console.log('FEIBACK Auth page loaded successfully! 🚀');
});

// Additional CSS for notifications
const notificationStyles = `
    .notification {
        font-family: 'Inter', sans-serif;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-content i {
        font-size: 1.2rem;
    }
    
    .input-wrapper.focused {
        transform: scale(1.02);
    }
    
    @media (max-width: 768px) {
        .notification {
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`;

// Inject notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);
