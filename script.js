// ---- Scroll-reveal (vanilla) ----
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // ---- jQuery: typewriter effect cycling through roles ----
  $(function(){
    var roles = [
      "Software Developer",
      "Front-End Engineer",
      "PHP / MySQL Integrator",
      "Python & Data-Driven Problem Solver"
    ];
    var ri = 0, ci = 0, deleting = false;
    function tick(){
      var current = roles[ri];
      if(!deleting){
        ci++;
        $('#typedRole').text(current.slice(0, ci));
        if(ci === current.length){ deleting = true; setTimeout(tick, 1500); return; }
      } else {
        ci--;
        $('#typedRole').text(current.slice(0, ci));
        if(ci === 0){ deleting = false; ri = (ri + 1) % roles.length; }
      }
      setTimeout(tick, deleting ? 30 : 55);
    }
    tick();
  });

  // ---- Count-up stat numbers on scroll into view ----
  function animateCount(el){
    var target = parseFloat(el.getAttribute('data-target'));
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1100;
    var start = performance.now();
    function step(now){
      var p = Math.min((now - start) / dur, 1);
      el.textContent = Math.floor(p * target) + suffix;
      if(p < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }
  var statIO = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ animateCount(e.target); statIO.unobserve(e.target); }
    });
  }, {threshold:0.4});
  document.querySelectorAll('.stat-num[data-target]').forEach(function(el){ statIO.observe(el); });

  // ---- AJAX: live GitHub stats via fetch ----
  (function(){
    var GITHUB_USERNAME = "devaiyaaz"; // GitHub username..
    fetch("https://api.github.com/users/" + GITHUB_USERNAME)
      .then(function(r){ if(!r.ok) throw new Error('not found'); return r.json(); })
      .then(function(data){
        document.getElementById('ghRepos').textContent = data.public_repos;
        document.getElementById('ghFollowers').textContent = data.followers;
        document.getElementById('ghGists').textContent = data.public_gists;
        document.getElementById('ghSince').textContent = new Date(data.created_at).getFullYear();
      })
      .catch(function(){
        document.getElementById('ghNote').textContent =
          'Set GITHUB_USERNAME in the code to your real GitHub handle to pull these stats live.';
      });
  })();

  // ---- jQuery: inline contact form validation + demo submit ----
  $(function(){
    $('#contactForm').on('submit', function(e){
      e.preventDefault();

      var $name = $('#cfName');
      var $email = $('#cfEmail');
      var $msg = $('#cfMessage');
      var $status = $('#cfStatus');
      var $submit = $('#cfSubmit');

      $name.removeClass('field-error');
      $email.removeClass('field-error');
      $msg.removeClass('field-error');

      var name = $name.val().trim();
      var email = $email.val().trim();
      var msg = $msg.val().trim();
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      var hasError = false;
      if(!name){ $name.addClass('field-error'); hasError = true; }
      if(!email || !emailPattern.test(email)){ $email.addClass('field-error'); hasError = true; }
      if(!msg){ $msg.addClass('field-error'); hasError = true; }

      if(hasError){
        $status.css('color', '#E8636B').text('Please fill in all fields with a valid email.');
        return;
      }

      $submit.prop('disabled', true).text('sending...');
      $status.css('color', 'var(--teal)').text('Sending…');

      // Demo only — this form isn't connected to a backend yet.
      // Wire it up to a real endpoint (Formspree, EmailJS, your own API) to actually deliver messages.
      setTimeout(function(){
        $submit.prop('disabled', false).text('send message');
        $status.css('color', '#4FD1C5').html(
          'This form isn\'t connected to a backend yet — email me directly at ' +
          '<a href="mailto:mohammadaiyaz99@gmail.com">mohammadaiyaz99@gmail.com</a> for now.'
        );
      }, 800);
    });
  });
    // Top button..
    const topBtn = document.getElementById("backToTopBtn");
    window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
    };
    topBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    };

    // ---- Mobile nav toggle ----
    (function(){
        var navToggle = document.getElementById('navToggle');
        var navLinks = document.getElementById('navLinks');
        if(!navToggle || !navLinks) return;

        function closeMenu(){
            navLinks.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }

        navToggle.addEventListener('click', function(e){
            e.stopPropagation();
            var isOpen = navLinks.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        navLinks.querySelectorAll('a').forEach(function(link){
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('click', function(e){
            if(!navToggle.contains(e.target) && !navLinks.contains(e.target)){
                closeMenu();
            }
        });

        window.addEventListener('resize', function(){
            if(window.innerWidth > 680){ closeMenu(); }
        });
    })();
