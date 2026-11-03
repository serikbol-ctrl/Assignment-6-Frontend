$(document).ready(function () {
  console.log('jQuery is ready!');

  $('h1').css('letter-spacing', '-1px');
  $('#greeting').text("Hello, I'm a Web Developer!");
  $('.logo').html('MyPortfolio<span>.</span>');
  $('#lightTheme').on('click', function () { $('body').removeClass('dark'); });
  $('#darkTheme').on('click', function () { $('body').addClass('dark'); });

  $('#hideStatus').on('click', function () { $('#statusMessage, #funFacts').hide(); });
  $('#showStatus').on('click', function () { $('#statusMessage, #funFacts').show(); });
  $('#toggleStatus').on('click', function () { $('#statusMessage, #funFacts').toggle(); });

  $('#fadeInGallery').on('click', function () { $('.gallery-grid img').stop(true, true).fadeIn(500); });
  $('#fadeOutGallery').on('click', function () { $('.gallery-grid img').stop(true, true).fadeOut(500); });
  $('#fadeToggleGallery').on('click', function () { $('.gallery-grid img').stop(true, true).fadeToggle(500); });

  $('.accordion-heading').on('click', function () {
    $('#' + $(this).attr('data-panel')).stop(true, true).slideToggle(350);
  });
  $('.panel-up').on('click', function () {
    $('#' + $(this).attr('data-panel')).stop(true, true).slideUp(350);
  });
  $('.panel-down').on('click', function () {
    $('#' + $(this).attr('data-panel')).stop(true, true).slideDown(350);
  });

  function addSkill(atBeginning) {
    const value = $('#newSkill').val().trim();
    if (!value) {
      $('#skillFeedback').text('Please enter a skill first.');
      return;
    }
    const item = $('<li>').text(value);
    if (atBeginning) { $('#skillList').prepend(item); }
    else { $('#skillList').append(item); }
    $('#newSkill').val('');
    $('#skillFeedback').text('Skill added: ' + value);
  }
  $('#addSkill').on('click', function () { addSkill(false); });
  $('#prependSkill').on('click', function () { addSkill(true); });
  $('#removeSkill').on('click', function () {
    const last = $('#skillList li:last');
    if (last.length) {
      last.remove();
      $('#skillFeedback').text('Last skill removed.');
    } else {
      $('#skillFeedback').text('There are no skills to remove.');
    }
  });

  let githubActive = true;
  $('#changeLink').on('click', function () {
    githubActive = !githubActive;
    if (githubActive) {
      $('#socialLink').attr('href', 'https://github.com/').text('Visit GitHub ↗');
    } else {
      $('#socialLink').attr('href', 'https://www.linkedin.com/').text('Visit LinkedIn ↗');
    }
  });

  $('#visitorName, #visitorEmail').on('input', function () {
    $('#namePreview').text($('#visitorName').val() || '—');
    $('#emailPreview').text($('#visitorEmail').val() || '—');
  });
  $('#contactForm').on('submit', function (event) { event.preventDefault(); });

  let barsExpanded = false;
  $('#animateSkills').on('click', function () {
    barsExpanded = !barsExpanded;
    $('.meter-fill').each(function () {
      const target = barsExpanded ? $(this).attr('data-width') : '0%';
      $(this).stop(true, false).animate({ width: target }, 800);
    });
  });
});
