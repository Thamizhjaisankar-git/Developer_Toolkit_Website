
function checkNetwork() {
  const alertBox = document.getElementById('network-alert');
  if (!navigator.onLine) {
    alertBox.innerHTML = '🚫 No internet connection';
    alertBox.style.display = 'block';
  } else {
    alertBox.style.display = 'none';
  }
}

// Check on load
checkNetwork();

// Listen for online/offline changes
window.addEventListener('offline', checkNetwork);
window.addEventListener('online', checkNetwork);


// .....................
        // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const html = document.documentElement;

        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            html.classList.add('dark');
            themeIcon.className = 'fas fa-sun text-sm';
        } else {
            html.classList.remove('dark');
            themeIcon.className = 'fas fa-moon text-sm';
        }

        themeToggle.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                themeIcon.className = 'fas fa-moon text-sm';
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                themeIcon.className = 'fas fa-sun text-sm';
                localStorage.setItem('theme', 'dark');
            }
        });

        // Mobile Menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuIcon = document.getElementById('mobile-menu-icon');

        mobileMenuBtn.addEventListener('click', () => {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                
                mobileMenuIcon.className = 'fas fa-times text-sm';
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenuIcon.className = 'fas fa-bars text-sm';
            }
        });

        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.section-content');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                
                // Hide all sections
                sections.forEach(section => {
                    section.classList.add('hidden');
                });
                
                // Show target section
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.remove('hidden');
                    targetSection.classList.add('fade-in');
                }
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('text-blue-600'));
                link.classList.add('text-blue-600');
                
                // Close mobile menu
                mobileMenu.classList.add('hidden');
                mobileMenuIcon.className = 'fas fa-bars text-sm';
            });
        });

        // Tabs
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Update button styles
                tabButtons.forEach(btn => {
                    btn.classList.remove('border-blue-500', 'text-blue-600');
                    btn.classList.add('border-transparent', 'text-gray-500');
                });
                button.classList.remove('border-transparent', 'text-gray-500');
                button.classList.add('border-blue-500', 'text-blue-600');
                
                // Update tab content
                tabContents.forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(targetTab + '-tab').classList.add('active');
            });
        });

        // Copy to clipboard
        document.addEventListener('click', (e) => {
            if (e.target.closest('.copy-button')) {
                const button = e.target.closest('.copy-button');
                const codeBlock = button.previousElementSibling;
                const code = codeBlock.textContent;
                
                navigator.clipboard.writeText(code).then(() => {
                    const originalText = button.innerHTML;
                    button.innerHTML = '<i class="fas fa-check mr-1"></i>Copied!';
                    setTimeout(() => {
                        button.innerHTML = originalText;
                    }, 2000);
                });
            }
        });

        // Initialize with home section visible
        document.getElementById('home').classList.remove('hidden');
        document.querySelector('a[href="#home"]').classList.add('text-blue-600');


        //get started overlay
      
            function showOverlay() {
                const modal = document.getElementById('welcome-modal');
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent background scroll
            }

            document.getElementById('close-modal').addEventListener('click', () => {
                document.getElementById('welcome-modal').classList.add('hidden');
                document.body.style.overflow = 'auto';
            });

            document.getElementById('start-trial').addEventListener('click', () => {
                document.getElementById('welcome-modal').classList.add('hidden');
                document.getElementById('pricing').classList.add('hidden');
                document.getElementById('home').classList.remove('hidden');
                document.body.style.overflow = 'auto';
                alert("Free trial started!");
            });

            document.getElementById('view-pricing').addEventListener('click', () => {
                window.location.href = "#pricing"; // change to actual pricing section or URL
            });

           



        //for overlay
      
        window.addEventListener('DOMContentLoaded', () => {
            const modal = document.getElementById('welcome-modal');
            const closeModal = document.getElementById('close-modal');
            const startTrial = document.getElementById('start-trial');
            const viewPricing = document.getElementById('view-pricing');

            // Close modal
            closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            });

            // Button: Continue with Free Trial
            startTrial.addEventListener('click', () => {
            modal.style.display = 'none';
            alert("You're starting your free trial!");
            // You can redirect or show another step here
            });
  });


 
        //pricing when cliking button
        const home = document.getElementById('home');
        const pricing = document.getElementById('pricing');
        const priceBtn = document.getElementById('priceBtn');

        // Disable auto-showing based on hash
        window.addEventListener('DOMContentLoaded', () => {
            // Always hide pricing by default
            pricing.classList.add('hidden');
            home.classList.remove('hidden');

            // Only show pricing after button click
            priceBtn.addEventListener('click', () => {
            home.classList.add('hidden');
            pricing.classList.remove('hidden');
            window.location.hash = 'pricing'; // optional, for navigation feel
            });
        });

        // Optional: Hide pricing again if user manually changes hash
        window.addEventListener('hashchange', () => {
            if (window.location.hash !== '#pricing') {
            pricing.classList.add('hidden');
            home.classList.remove('hidden');
            }
        });



    //pricing shown for view pricing button 
        const overlaypricebtn = document.getElementById('view-pricing');
        const welcomemodal = document.getElementById('welcome-modal');
        const trialbtn = document.getElementById('start-Trial');

         window.addEventListener('DOMContentLoaded', () => {
            // Always hide pricing by default
            pricing.classList.add('hidden');
            home.classList.remove('hidden');

            // Only show pricing after button click
            overlaypricebtn.addEventListener('click', () => {
            home.classList.add('hidden');
            pricing.classList.remove('hidden');
            overlaypricebtn.classList.add('hidden');
            trailbtn.classList.add('hidden');
            welcomemodal.classList.add('hidden');
            window.location.hash = 'pricing'; // optional, for navigation feel
            });
        }); 
            window.addEventListener('hashchange', () => {
            if (window.location.hash !== '#pricing') {
            pricing.classList.add('hidden');
            home.classList.remove('hidden');
            }
        });


//sidebars
// ......... Doc sidebars .............

 document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".doc-link");
    const pages = document.querySelectorAll(".doc-page");

    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();

        const selectedPage = link.getAttribute("data-page");

        // Remove active class from all links
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        // Hide all pages
        pages.forEach(page => page.classList.add("hidden"));

        // Show only selected page
        const showPage = document.getElementById(`page-${selectedPage}`);
        if (showPage) {
          showPage.classList.remove("hidden");
        }

        // Specifically hide the installation page if it's not clicked
        if (selectedPage !== "installation") {
          const installPage = document.getElementById("page-installation");
          if (installPage) installPage.classList.add("hidden");
        }
      });
    });
  });