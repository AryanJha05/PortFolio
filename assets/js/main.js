/***************************************************
==================== JS INDEX ======================
****************************************************

01. PreLoader Js
02. Sticky Js
03. Menu Controls JS
04. offcanvas Menu JS
05. offcanvas two Menu JS
06. Sidebar Js
07. AOS Js
08. Backtotop Js
09. Magnific Popup Js
10. Counter Js
11. Feature Widget Animation Js
12. Service Two Images Hover Animation Js
13. Bg Image For Attribute  Js
14. Mouse active Js





****************************************************/

(function ($) {
  "use strict";

  // Disable browser auto-jump on page refresh so preloader displays smoothly
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  ////////////////////////////////////////////////////
  // 01. PreLoader Js
  document.addEventListener("DOMContentLoaded", () => {
    // Create GSAP timeline
    const tl = gsap.timeline();
    const svg = document.getElementById("preloaderSvg");
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
    // Text animation
    tl.to(".preloader-heading .load-text, .preloader-heading .cont", {
      delay: 1,
      y: -80,
      opacity: 0,
      duration: 0.6,
    })
      // SVG curve animation
      .to(svg, {
        duration: 0.6,
        attr: { d: curve },
        ease: "power2.inOut",
      })
      // Flatten SVG
      .to(svg, {
        duration: 0.6,
        attr: { d: flat },
        ease: "power2.inOut",
      })
      // Slide preloader up
      .to(".preloader", {
        y: "-130%",
        duration: 0.8,
        ease: "power4.inOut",
      })
      // Remove from DOM flow
      .set(".preloader", {
        display: "none",
        zIndex: -1,
      })
      .call(() => {
        // Refresh GSAP ScrollTrigger after preloader finishes
        if (typeof ScrollTrigger !== "undefined") {
          ScrollTrigger.refresh();
        }
        // Smoothly scroll to initial URL hash if present
        if (window.location.hash) {
          const target = $(window.location.hash);
          if (target.length) {
            const headerOffset = 90;
            const targetPos = Math.max(0, target.offset().top - headerOffset);
            $("html, body").stop().animate({ scrollTop: targetPos }, 600);
          }
        }
      });
  });

  ////////////////////////////////////////////////////
  // 02. Sticky Js
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 260) {
      $(".header").addClass("fixed-header");
    } else {
      $(".header").removeClass("fixed-header");
    }
  });

  ////////////////////////////////////////////////////
  // 03. Menu Controls JS
  $(".tw-hamburger-toggle").on("click", function () {
    $(".tw-header-side-menu").slideToggle("tw-header-side-menu");
  });
  if ($(".tw-main-menu-content").length && $(".tw-main-menu-mobile").length) {
    let mobileNavContainer = document.querySelector(".tw-main-menu-mobile");
    if (!mobileNavContainer.querySelector("ul")) {
      let navContent = document.querySelector(".tw-main-menu-content").outerHTML;
      mobileNavContainer.innerHTML = navContent;
    }
    let arrow = $(".tw-main-menu-mobile .has-dropdown > a");
    arrow.each(function () {
      let self = $(this);
      let arrowBtn = document.createElement("BUTTON");
      arrowBtn.classList.add("dropdown-toggle-btn");
      arrowBtn.innerHTML = "<i class='ph ph-caret-right'></i>";
      self.append(function () {
        return arrowBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("dropdown-opened");
        self.parent().toggleClass("expanded");
        self
          .parent()
          .parent()
          .addClass("dropdown-opened")
          .siblings()
          .removeClass("dropdown-opened");
        self.parent().parent().children(".tw-submenu").slideToggle();
      });
    });
  }

  ////////////////////////////////////////////////////
  // 04. offcanvas Menu JS
  $(".tw-offcanvas-open-btn").on("click", function () {
    $(".tw-offcanvas-2-area").addClass("opened");

    setTimeout(() => {
      $(".tw-text-hover-effect-word").addClass("animated-text");
    }, 900);
  });

  ////////////////////////////////////////////////////
  // 05. offcanvas two Menu JS
  $(".tw-offcanvas-2-close-btn").on("click", function () {
    setTimeout(() => {
      $(".tw-text-hover-effect-word").removeClass("animated-text");
    }, 1200);

    $(".tw-offcanvas-2-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });

  // Auto-close offcanvas and sidebar when clicking in-page anchor links
  $(".tw-offcanvas-2-area a[href^='#'], .twoffcanvas a[href^='#']").on("click", function () {
    $(".tw-text-hover-effect-word").removeClass("animated-text");
    $(".tw-offcanvas-2-area").removeClass("opened");
    $(".twoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("opened apply");
  });

  ////////////////////////////////////////////////////
  // 06. Sidebar Js
  $(".tw-menu-bar").on("click", function () {
    $(".twoffcanvas").addClass("opened");
    $(".body-overlay").addClass("apply");
  });
  $(".close-btn").on("click", function () {
    $(".twoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });
  $(".body-overlay").on("click", function () {
    $(".twoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });

  ////////////////////////////////////////////////////
  // 07. AOS Js
  AOS.init({
    once: false, // animation will happen every time you scroll
    offset: 0, // start animation when element enters the viewport
    anchorPlacement: "top-bottom", // when the bottom of the element hits the bottom of the screen
  });

  // 08. Backtotop Js
  function back_to_top() {
    var btn = $("#back_to_top");
    var btn_wrapper = $(".back-to-top-wrapper");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 300) {
        btn_wrapper.addClass("back-to-top-btn-show");
      } else {
        btn_wrapper.removeClass("back-to-top-btn-show");
      }
    });

    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 300);
    });
  }
  back_to_top();

  ////////////////////////////////////////////////////
  // 09. Magnific Popup Js
  $(".open-popup").magnificPopup({
    type: "iframe",
    removalDelay: 300,
    mainClass: "mfp-fade",
  });

  ////////////////////////////////////////////////////
  // 10. Counter Js
  new PureCounter();
  new PureCounter({
    filesizing: true,
    selector: ".filesizecount",
    pulse: 2,
  });

  ////////////////////////////////////////////////////
  // 11. Feature Widget Animation Js
  function service_animation() {
    var active_bg = $(".feature-widget .active-bg");
    var element = $(".feature-widget .current");
    $(".feature-widget .feature-2-item").on("mouseenter", function () {
      var e = $(this);
      activeService(active_bg, e);
    });
    $(".feature-widget").on("mouseleave", function () {
      element = $(".feature-widget .current");
      activeService(active_bg, element);
      element.closest(".feature-2-item").siblings().removeClass("mleave");
    });
    activeService(active_bg, element);
  }
  service_animation();
  function activeService(active_bg, e) {
    if (!e.length) {
      return false;
    }
    var topOff = e.offset().top;
    var height = e.outerHeight();
    var menuTop = $(".feature-widget").offset().top;
    e.closest(".feature-2-item").removeClass("mleave");
    e.closest(".feature-2-item").siblings().addClass("mleave");
    active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
  }
  $(".feature-widget .feature-2-item").on("click", function () {
    $(".feature-widget .feature-2-item").removeClass("current");
    $(this).addClass("current");
  });

  ////////////////////////////////////////////////////
  // 12. Service Two Images Hover Animation Js
  $(".service-two-list-wrap .service-two-list-item").on(
    "mouseenter",
    function () {
      $("#service-two-thumb").removeClass().addClass($(this).attr("rel"));
      $(this).addClass("active").siblings().removeClass("active");
    },
  );

  ////////////////////////////////////////////////////
  // 13. Bg Image For Attribute  Js
  $(".bg-img").each(function () {
    var img = $(this).data("background-image");
    if (img) {
      $(this).css("background-image", "url('" + img + "')");
    }
  });

  ////////////////////////////////////////////////////
  // 14. Mouse active Js
  $(document).ready(function () {
    $(".service-ip-wrapper").on("mouseenter", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });

    $(".service-ip-wrapper").on("mouseenter", function () {
      $(this).addClass("active");
      $(this)
        .parent()
        .siblings()
        .find(".service-ip-wrapper")
        .removeClass("active");
    });
  });

  $(document).ready(function () {
    function initRipples() {
      $(".ripple-image").each(function () {
        var $container = $(this);
        var $img = $container.find("img").first();

        if ($img.length === 0) return;

        var img = new Image();
        img.src = $img.attr("src");

        img.onload = function () {
          var imgURL = img.src;

          $container.css({
            "background-image": "url(" + imgURL + ")",
            "background-size": "cover",
            "background-position": "center center",
          });

          // init ripples plugin
          if (typeof $container.ripples === "function") {
            $container.ripples({
              resolution: 400,
              perturbance: 0.03,
              imageUrl: imgURL,
            });
          }

          $img.hide();
        };
      });
    }

    initRipples();
  });

  ////////////////////////////////////////////////////
  // 15. Functional Contact Form with Validation & Mailto Fallback
  $(document).ready(function () {
    const $contactForm = $("#contact-form");
    if (!$contactForm.length) return;

    const $nameInput = $("#contact-name");
    const $emailInput = $("#contact-email");
    const $subjectInput = $("#contact-subject");
    const $messageInput = $("#contact-message");
    const $submitBtn = $("#contact-submit-btn");
    const $btnSpinner = $submitBtn.find(".contact-btn-spinner");
    const $btnText = $submitBtn.find(".contact-btn-text");
    const $statusAlert = $("#contact-status-alert");

    // Standard RFC-compliant email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function validateField($input, isValid, errorSelector, customMsg) {
      const $err = $(errorSelector);
      if (!isValid) {
        $input.addClass("is-invalid").removeClass("is-valid");
        $input.attr("aria-invalid", "true");
        if (customMsg) {
          $err.text(customMsg);
        }
        $err.removeClass("d-none");
        return false;
      } else {
        $input.removeClass("is-invalid").addClass("is-valid");
        $input.attr("aria-invalid", "false");
        $err.addClass("d-none");
        return true;
      }
    }

    // Realtime validation on user typing/blur after first submit
    $nameInput.on("input blur", function () {
      if ($contactForm.data("submitted")) {
        validateField($nameInput, $.trim($nameInput.val()).length >= 2, "#contact-name-error");
      }
    });

    $emailInput.on("input blur", function () {
      if ($contactForm.data("submitted")) {
        const val = $.trim($emailInput.val());
        validateField($emailInput, emailRegex.test(val), "#contact-email-error");
      }
    });

    $subjectInput.on("input blur", function () {
      if ($contactForm.data("submitted")) {
        validateField($subjectInput, $.trim($subjectInput.val()).length >= 2, "#contact-subject-error");
      }
    });

    $messageInput.on("input blur", function () {
      if ($contactForm.data("submitted")) {
        validateField($messageInput, $.trim($messageInput.val()).length >= 5, "#contact-message-error");
      }
    });

    $contactForm.on("submit", function (e) {
      e.preventDefault();
      $contactForm.data("submitted", true);

      const nameVal = $.trim($nameInput.val());
      const emailVal = $.trim($emailInput.val());
      const subjectVal = $.trim($subjectInput.val());
      const messageVal = $.trim($messageInput.val());

      const isNameValid = validateField(
        $nameInput,
        nameVal.length >= 2,
        "#contact-name-error",
        "Please enter your name (at least 2 characters)."
      );
      const isEmailValid = validateField(
        $emailInput,
        emailRegex.test(emailVal),
        "#contact-email-error",
        "Please enter a valid email address."
      );
      const isSubjectValid = validateField(
        $subjectInput,
        subjectVal.length >= 2,
        "#contact-subject-error",
        "Please enter a subject (at least 2 characters)."
      );
      const isMessageValid = validateField(
        $messageInput,
        messageVal.length >= 5,
        "#contact-message-error",
        "Please enter your message (at least 5 characters)."
      );

      if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
        $statusAlert
          .removeClass("d-none alert-success")
          .addClass("alert-danger")
          .html(
            '<div class="d-flex align-items-center tw-gap-2">' +
              '<i class="ph ph-warning-circle tw-text-xl flex-shrink-0"></i>' +
              '<span><strong>Please fix the errors above</strong> and complete all required fields.</span>' +
            '</div>'
          );
        // Focus first field with error
        $contactForm.find(".is-invalid").first().focus();
        return;
      }

      // Enter loading state
      $submitBtn.prop("disabled", true);
      $btnSpinner.removeClass("d-none");
      $btnText.text("OPENING EMAIL CLIENT...");

      // Build structured email payload
      const recipient = "aryan42006@gmail.com";
      const emailSubject = `Portfolio Contact — Aryan Jha: ${subjectVal}`;
      const emailBody =
        `Hi Aryan,\n\n` +
        `${messageVal}\n\n` +
        `----------------------------------------\n` +
        `Sender Information:\n` +
        `Name: ${nameVal}\n` +
        `Email: ${emailVal}\n` +
        `Subject: ${subjectVal}\n` +
        `Sent via Aryan Jha Portfolio Contact Form`;

      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Simulate a responsive brief transition before triggering client
      setTimeout(function () {
        // Trigger mail client
        const mailLink = document.createElement("a");
        mailLink.href = mailtoUrl;
        mailLink.rel = "noopener noreferrer";
        document.body.appendChild(mailLink);
        mailLink.click();
        document.body.removeChild(mailLink);

        // Display accessible confirmation banner
        $statusAlert
          .removeClass("d-none alert-danger")
          .addClass("alert-success")
          .html(
            '<div class="d-flex align-items-start tw-gap-3">' +
              '<i class="ph ph-check-circle tw-text-2xl text-success flex-shrink-0 mt-1"></i>' +
              '<div>' +
                '<h5 class="text-white tw-text-base fw-bold mb-1">Email Client Launched!</h5>' +
                '<p class="tw-text-sm text-neutral-200 mb-2">Your message has been formatted and addressed to <strong>aryan42006@gmail.com</strong> in your default mail application.</p>' +
                '<p class="tw-text-xs text-neutral-300 mb-0">Did your mail client not open automatically? ' +
                  '<a href="' + mailtoUrl + '" class="text-main-600 fw-bold hover-underline">Click here to send directly</a> or email me at <a href="mailto:aryan42006@gmail.com?subject=Portfolio%20Contact%20%E2%80%94%20Aryan%20Jha" class="text-main-600 fw-bold hover-underline">aryan42006@gmail.com</a>.' +
                '</p>' +
              '</div>' +
            '</div>'
          );

        // Restore button state
        $submitBtn.prop("disabled", false);
        $btnSpinner.addClass("d-none");
        $btnText.text("SEND MESSAGE");
      }, 400);
    });
  });
})(jQuery);
