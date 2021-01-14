$(document).ready(function() {

var currentNavItemIndex = 0;
var selectedNavItemIndex = 0;
var currentSmallCardID = "#wrapper1";
var currentSmallCardIndex = 0;

/**Home PB Module variables**/
var currentIndexPB = 0;
var selectedIndexPB = 0;
var desktopPBLine = document.getElementsByClassName('pb-desktop-nav-line');
var desktopPBOuterNav = document.getElementsByClassName('pb-nav-outer');
var desktopPBInnerNav = document.getElementsByClassName('pb-nav-inner');
var desktopPBDes = document.getElementsByClassName('pb-desktop-description');
var desktopPBImage = document.getElementsByClassName('pb-desktop-image');
var desktopPBNavLabel = document.getElementsByClassName('pb-desktop-nav-label');
var mobilePBNavLabel = document.getElementsByClassName('pb-mobile-nav-label');
var mobilePBContent = document.getElementsByClassName('pb-mobile-content');
var desktopPBSeen = false;

/**PB VIP variables**/
var currentIndexVIP = 0;
var selectedIndexVIP = 0;
var desktopVIPLine = document.getElementsByClassName('vip-desktop-nav-line');
var desktopVIPOuterNav = document.getElementsByClassName('vip-nav-outer');
var desktopVIPInnerNav = document.getElementsByClassName('vip-nav-inner');
var desktopVIPDes = document.getElementsByClassName('vip-desktop-description');
var desktopVIPImage = document.getElementsByClassName('vip-desktop-image');
var desktopVIPNavLabel = document.getElementsByClassName('vip-desktop-nav-label');
var mobileVIPNavLabel = document.getElementsByClassName('vip-mobile-nav-label');
var mobileVIPContent = document.getElementsByClassName('vip-mobile-content');
var desktopVIPSeen = false;

/**Pixelberry Page Variables**/
var PBImagesSeen = false;
var SmallCardSeen = false;
var PBMoreImagesSeen = false;
var PBMoreImages = document.getElementsByClassName('pb-more-image-photo');


/**Netease Variables**/
var NetEaseNavFlowSeen = false;
var NetEaseNavFlowImages = document.getElementsByClassName('netease-nav-flow-photo');
var NetEaseWiresSeen = false;
var NetEaseMoreImagesSeen = false;
var NetEaseMoreImages = document.getElementsByClassName('netease-more-image-photo');

/**CBS Variables**/
var CBSProblemsGoalsSeen = false;
var CBSResearchMethodsSeen = false;
var CBSLearningsSeen = false;
var CBSLearningsItemsSeen = false;

/**PB Large Card variables**/
var currentIndexLargeCard = 0;
var selectedIndexLargeCard = 0;
var desktopLargeCardLine = document.getElementsByClassName('large-card-desktop-nav-line');
var desktopLargeCardOuterNav = document.getElementsByClassName('large-card-nav-outer');
var desktopLargeCardInnerNav = document.getElementsByClassName('large-card-nav-inner');
var desktopLargeCardDes = document.getElementsByClassName('large-card-desktop-description');
var desktopLargeCardImage = document.getElementsByClassName('large-card-desktop-image');
var desktopLargeCardNavLabel = document.getElementsByClassName('large-card-desktop-nav-label');
var mobileLargeCardNavLabel = document.getElementsByClassName('large-card-mobile-nav-label');
var mobileLargeCardContent = document.getElementsByClassName('large-card-mobile-content');
var desktopLargeCardSeen = false;

/**Netease Mocks&Implementation variables**/
var currentIndexNetEase = 0;
var selectedIndexNetEase = 0;
var desktopNetEaseLine = document.getElementsByClassName('netease-desktop-nav-line');
var desktopNetEaseOuterNav = document.getElementsByClassName('netease-nav-outer');
var desktopNetEaseInnerNav = document.getElementsByClassName('netease-nav-inner');
var desktopNetEaseDes = document.getElementsByClassName('netease-desktop-description');
var desktopNetEaseImage = document.getElementsByClassName('netease-desktop-image');
var desktopNetEaseNavLabel = document.getElementsByClassName('netease-desktop-nav-label');
var mobileNetEaseNavLabel = document.getElementsByClassName('netease-mobile-nav-label');
var mobileNetEaseContent = document.getElementsByClassName('netease-mobile-content');
var desktopNetEaseSeen = false;

/**CBS Designs & Solutions variables**/
var currentIndexCBS = 0;
var selectedIndexCBS = 0;
var desktopCBSLine = document.getElementsByClassName('cbs-desktop-nav-line');
var desktopCBSOuterNav = document.getElementsByClassName('cbs-nav-outer');
var desktopCBSInnerNav = document.getElementsByClassName('cbs-nav-inner');
var desktopCBSDes = document.getElementsByClassName('cbs-desktop-description');
var desktopCBSImage = document.getElementsByClassName('cbs-desktop-image');
var desktopCBSNavLabel = document.getElementsByClassName('cbs-desktop-nav-label');
var mobileCBSNavLabel = document.getElementsByClassName('cbs-mobile-nav-label');
var mobileCBSContent = document.getElementsByClassName('cbs-mobile-content');
var desktopCBSSeen = false;


var learningsItem = document.getElementsByClassName('learnings-item');
var smallCardMobileItem = document.getElementsByClassName('before-after-wrapper');

/**Values for animation entering**/
var delay = 260;
var delayAddition = 150;

//Percentage is going to be inversed for small card.
var percentage1 = 65;
var percentage2 = 65;
var percentage3 = 65;

(function($) {
  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */
  $.fn.visible = function(partial) {
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})(jQuery);
 

  $(window).on('load', function() {

  animateWorkContainer();
  animateHomePBSection();
  animateNetEaseHomeSection();
  animateCBSHomeSection();

  animateVIPSection();
  animateLargeCardSection();
  animateNetEaseSection();
  animateCBSSection();
  animatePBImage();
  animateSmallCard();
  animatePBMore();

  animateNetEaseFlow();
  animateNetEaseWires();
  animateNetEaseMore();
  animateCBSProblemsGoals();
  animateCBSResearchMethods();
  animateLearnings();
  animateLearningsItems();
});

$(document).scroll(function() {
  /**Animating index sections that come in.**/
  animateWorkContainer();
  animateHomePBSection();
  animateNetEaseHomeSection();
  animateCBSHomeSection();

  animateVIPSection();
  animateLargeCardSection();
  animateNetEaseSection();
  animateCBSSection();
  animatePBImage();
  animateSmallCard();
  animatePBMore();

  animateNetEaseFlow();
  animateNetEaseWires();
  animateNetEaseMore();
  animateCBSProblemsGoals();
  animateCBSResearchMethods();
  animateLearnings();
  animateLearningsItems();

});

function initializeLearnings(classList) {
  var length = classList.length;
  for (var i = 0; i < length; i++) {
    if (i == 0) {
      classList[i].classList.add("active");
    } else {
      classList[i].classList.add("inactive");
    }
  }
}


/**Selecting learning items.**/
$('.learnings-item').click(function() {
  var index = $(this).index();
  for (var i = 0; i < learningsItem.length; i++) {
    if (i == index) {
      learningsItem[i].classList.remove("inactive");
      learningsItem[i].classList.add("active");
      learningsItem[i].classList.add("popIn");
    } else {
      learningsItem[i].classList.add("inactive");
      learningsItem[i].classList.remove("active");
      learningsItem[i].classList.remove("popIn");
    }
  }
})

function removeAndSetVisible(classList) {
  for (var i = 0; i < classList.length; i++) {
    classList[i].classList.remove("fadePopIn");
    classList[i].classList.add('visible');
  }
}

function animateLearnings() {
    if ((percentInViewport(".learnings-container", 20)) && (!CBSLearningsSeen)) {
    CBSLearningsSeen = true;
    $('#cbs-learnings-header').addClass("fadeInUp");
  }
}

function animateLearningsItems() {
  if ((percentInViewport(".learnings-container", 60)) && (!CBSLearningsItemsSeen)) {
  CBSLearningsItemsSeen = true;
    $("#learnings-item-1").addClass("fadePopIn");
      setTimeout(function() {
        $("#learnings-item-2").addClass("fadePopIn");
        setTimeout(function() {
          $("#learnings-item-3").addClass("fadePopIn");
            setTimeout(function() {
              $("#learnings-item-4").addClass("fadePopIn");
                setTimeout(function() {
                  removeAndSetVisible(learningsItem);
                }, 1000);
            }, 270);
        }, 220);
    }, 170);
  }
}

function animateCBSResearchMethods() {
    if ((percentInViewport(".cbs-research-methods-container", 20)) && (!CBSResearchMethodsSeen)) {
    CBSResearchMethodsSeen = true;
    animateIntroHeading('#research-methods-header', '#research-methods-description');
  }
}

/**Animating the items for CBS Problems & Goals**/
function animateCBSListItemsDesktop() {
    $("#cbs-list-item-1").addClass("fadePopIn");
    setTimeout(function() {
      $("#cbs-list-item-2").addClass("fadePopIn");
      setTimeout(function() {
        $("#cbs-list-item-3").addClass("fadePopIn");
          setTimeout(function() {
            $("#cbs-list-item-4").addClass("fadePopIn");
          }, 270);
      }, 220);
  }, 170);
}

/**Animating the items for CBS Problems & Goals**/
function animateCBSListItemsMobile() {
    $("#cbs-list-item-1-mobile").addClass("fadePopIn");
    setTimeout(function() {
      $("#cbs-list-item-2-mobile").addClass("fadePopIn");
      setTimeout(function() {
        $("#cbs-list-item-3-mobile").addClass("fadePopIn");
          setTimeout(function() {
            $("#cbs-list-item-4-mobile").addClass("fadePopIn");
          }, 270);
      }, 220);
  }, 170);
}


function animateCBSProblemsGoals() {
    if ((percentInViewport("#cbs-problem-goals", 40)) && (!CBSProblemsGoalsSeen)) {
    CBSProblemsGoalsSeen = true;
    animateIntroHeading('#cbs-problem-goals-header', '#cbs-problem-goals-description');
    setTimeout(function() {
      animateCBSListItemsDesktop();
      animateCBSListItemsMobile();}, 150);
  }
}

function animateNetEaseFlow() {
  if ((percentInViewport("#netease-image-background", 20)) && (!NetEaseNavFlowSeen)) {
    NetEaseNavFlowSeen = true;
    animateIntroHeading('#nav-flow-header', '#nav-flow-description');
    animateMoreImages(NetEaseNavFlowImages);
  }
}

function animateNetEaseWires() {
  if ((percentInViewport("#netease-wires-container", 20)) && (!NetEaseWiresSeen)) {
    NetEaseWiresSeen = true;
    animateIntroHeading('#netease-wires-header', '#netease-wires-description');
  }
}

function animateNetEaseMore() {
    if ((percentInViewport("#netease-more-image-container", 20)) && (!NetEaseMoreImagesSeen)) {
    NetEaseMoreImagesSeen = true;
    animateIntroHeading('#netease-more-header', '#netease-more-description');
    animateMoreImages(NetEaseMoreImages);
  }
}

function animatePBMore() {
    if ((percentInViewport("#pb-more-image-container", 20)) && (!PBMoreImagesSeen)) {
    PBMoreImagesSeen = true;
    animateIntroHeading('#pixelberry-more-header', '#pixelberry-more-description');
    animateMoreImages(PBMoreImages);
  }
}

function animateMoreImages(classImages) {
  for (var i = 0; i < classImages.length; i++) {
    classImages[i].classList.add("fadeInUpMoreImages");
  }
}

function animateSmallCard() {
    if ((percentInViewport("#pb-small-card-container", 20)) && (!SmallCardSeen)) {
      SmallCardSeen = true;
    animateIntroHeading('#small-card-header', '#small-card-description');
  }
}

/**Animating the 3 Pixelberry Images**/
function animatePBImage() {
  if ((percentInViewport(".pixelberry-image-wrapper", 20)) && (!PBImagesSeen)) {
    $('#pb-image-middle').addClass("pb-middle-image-anim");
    setTimeout(function() {
      $('#pb-image-left').addClass("pb-image-anim");
      setTimeout(function() {
        $('#pb-image-right').addClass("pb-image-anim");
      }, 130);
    }, 100);
  }
}

function animateIntroHeading(stringHeading, stringBody) {
    $(stringHeading).addClass("fadeInUp");
    $(stringBody).addClass("fadeInUp");
}

function animateButtonIn(stringID) {
    setTimeout(function () {
      $(stringID).addClass("button-reveal");
      $(stringID).removeClass("button-clipped")}, 500);
  }

function animateHomePBSection() {
  if ((percentInViewport(".home-pixelberry-section", 20)) && (!desktopPBSeen)) {
    desktopPBSeen = true;
    animateModule('#desktop-home-pb-content', desktopPBImage, '#desktop-pb-line', 
      desktopPBNavLabel, desktopPBLine, desktopPBOuterNav, desktopPBInnerNav, desktopPBNavLabel.length);
    animateNavigation(desktopPBNavLabel, desktopPBInnerNav, desktopPBNavLabel.length);
    animateNavigationButton('#pb-home-button', desktopPBNavLabel.length);
  }
}

function animateVIPSection() {
  if ((percentInViewport("#pb-vip-desktop", 20)) && (!desktopVIPSeen)) {
    desktopVIPSeen = true;
    animateModule('#desktop-vip-content', desktopVIPImage, '#desktop-vip-line',
      desktopVIPNavLabel, desktopVIPLine, desktopVIPOuterNav, desktopVIPInnerNav, desktopVIPNavLabel.length);
    animateNavigation(desktopVIPNavLabel, desktopVIPInnerNav, desktopVIPNavLabel.length);
  }
}

function animateLargeCardSection() {
  if ((percentInViewport("#large-card-container", 20)) && (!desktopLargeCardSeen)) {
    desktopLargeCardSeen = true;
    animateModule('#desktop-large-card-content', desktopLargeCardImage, '#desktop-large-card-line',
      desktopLargeCardNavLabel, desktopLargeCardLine, desktopLargeCardOuterNav, desktopLargeCardInnerNav, desktopLargeCardNavLabel.length);
    animateNavigation(desktopLargeCardNavLabel, desktopLargeCardInnerNav, desktopLargeCardNavLabel.length);
  }
}

function animateNetEaseSection() {
  if ((percentInViewport("#netease-container", 20)) && (!desktopNetEaseSeen)) {
    desktopNetEaseSeen = true;
    animateModule('#desktop-netease-content', desktopNetEaseImage, '#desktop-netease-line',
      desktopNetEaseNavLabel, desktopNetEaseLine, desktopNetEaseOuterNav, desktopNetEaseInnerNav, desktopNetEaseNavLabel.length);
    animateNavigation(desktopNetEaseNavLabel, desktopNetEaseInnerNav, desktopNetEaseNavLabel.length);
  }
}

function animateCBSSection() {
  if ((percentInViewport("#cbs-container", 20)) && (!desktopCBSSeen)) {
    desktopCBSSeen = true;
    animateModule('#desktop-cbs-content', desktopCBSImage, '#desktop-cbs-line',
      desktopCBSNavLabel, desktopCBSLine, desktopCBSOuterNav, desktopCBSInnerNav, desktopCBSNavLabel.length);
    animateNavigation(desktopCBSNavLabel, desktopCBSInnerNav, desktopCBSNavLabel.length);
  }
}

function animateModule(desktopContentString, classListImage, desktopLineString, 
  classListNavLabel, classListLine, classListOuterNav, classListInnerNav, length) {
  $(desktopContentString).addClass("fadeInUp");
  classListImage[0].classList.add("reveal");
  classListImage[0].classList.add("visible");
  setTimeout(function() {
    $(desktopLineString).addClass("grow");
    classListLine[0].classList.add("visible");
    classListOuterNav[0].classList.add("visible");
    classListInnerNav[0].classList.add("selected");}, delay);
}

/**Helper function for animateModule(). Animates the inner nav icons popping in and the button. Pairs with initializeLabels.**/
function animateNavigation(classListLabel, classNavInner, length) {
  for (let i = 0; i < length; i++) {
    setTimeout(function(){
      classNavInner[i].classList.add('popIn');
      classListLabel[i].classList.add('fadeIn');
      classListLabel[i].classList.add('visible');
    }, delay);
    delay += delayAddition;
  }
  /**Removes the fadein**/
  for (let i = 0; i < length; i++) {
    setTimeout(function(){
      classListLabel[i].classList.remove('fadeIn');
    }, delay + (delayAddition * (length + 1)));
  }
}

/**Helper function for animateModule(). Animates the inner nav icons popping in and the button. Pairs with initializeLabels.**/
function animateNavigationButton(buttonID, length) {
  setTimeout(function(){
    $(buttonID).addClass("button-reveal");
    $(buttonID).removeClass("button-clipped");
  }, delayAddition * (length+3));
}

function initializeLabels(classListDesktop, classListMobile, length) {
  for (var i = 0; i < length; i++) {
    if (i == 0) {
      classListDesktop[i].classList.add("selected");
      classListMobile[i].classList.add("selected");
    } else {
      classListDesktop[i].classList.add("deselected");
      classListMobile[i].classList.add("deselected");
    }
  }
}


function animateCBSHomeSection() {
    if (percentInViewport("#cbs-parallax", 30)) {
    $('#cbs-parallax').addClass("fadeInUp");
    $('#cbs-parallax').css("opacity", 1);
  }
  if(percentInViewport("#cbs-section-description", 90)) {
    $('#cbs-section-button').addClass("button-reveal");
    $('#cbs-section-button').removeClass("button-clipped");
  }
}

function animateNetEaseHomeSection() {
  if (percentInViewport("#netease-parallax", 30)) {
    $('#netease-parallax').addClass("fadeInUp");
    $('#netease-parallax').css("opacity", 1);
  }
  if(percentInViewport("#netease-section-description", 90)) {
    $('#netease-section-button').addClass("button-reveal");
    $('#netease-section-button').removeClass("button-clipped");
  }
}

/**Controls hover effect for the navitation labels.**/
function addLabelHover(classNavLabel, index) {
  classNavLabel[index].classList.add('leftright');
  classNavLabel[index].classList.add('topdown');
}

function removeLabelHover(classNavLabel, index) {
  classNavLabel[index].classList.remove('topdown');
  classNavLabel[index].classList.remove('leftright');
}

function addInnerHover(classNavInner, index) {
  classNavInner[index].classList.add('hover');
}

function removeInnerHover(classNavInner, index) {
  classNavInner[index].classList.remove('hover');
}

//cancel hover effect if it's selected
/**Hover function in the navigation label**/
$('.pb-desktop-nav-label, .pb-nav-inner').hover(function() {
  if (!($(this).hasClass('selected'))) {
    if ($(this).hasClass('pb-desktop-nav-label')) {
      index = $(this).parent().index();
    } else if ($(this).hasClass('pb-nav-inner')) {
      index = $(this).parent().parent().index();
    }
    addLabelHover(desktopPBNavLabel, index);
    addInnerHover(desktopPBInnerNav, index);
  }},
  function() {
    if (!($(this).hasClass('selected'))) {
    if ($(this).hasClass('pb-desktop-nav-label')) {
      index = $(this).parent().index();
    } else if ($(this).hasClass('pb-nav-inner')) {
      index = $(this).parent().parent().index();
    }
    removeLabelHover(desktopPBNavLabel, index);
    removeInnerHover(desktopPBInnerNav, index);
  }}
);

$('.vip-desktop-nav-label, .vip-nav-inner').hover(function() {
    if (!($(this).hasClass('selected'))) {
    if ($(this).hasClass('vip-desktop-nav-label')) {
      index = $(this).parent().index();
    } else if ($(this).hasClass('vip-nav-inner')) {
      index = $(this).parent().parent().index();
    }
    addLabelHover(desktopVIPNavLabel, index);
    addInnerHover(desktopVIPInnerNav, index);
  }},
  function() {
    if (!($(this).hasClass('selected'))) {
      if ($(this).hasClass('vip-desktop-nav-label')) {
        index = $(this).parent().index();
      } else if ($(this).hasClass('vip-nav-inner')) {
        index = $(this).parent().parent().index();
      }
      removeLabelHover(desktopVIPNavLabel, index);
      removeInnerHover(desktopVIPInnerNav, index);
  }}
);

$('.large-card-desktop-nav-label, .large-card-nav-inner').hover(function() {
    if (!($(this).hasClass('selected'))) {
    if ($(this).hasClass('large-card-desktop-nav-label')) {
      index = $(this).parent().index();
    } else if ($(this).hasClass('large-card-nav-inner')) {
      index = $(this).parent().parent().index();
    }
    addLabelHover(desktopLargeCardNavLabel, index);
    addInnerHover(desktopLargeCardInnerNav, index);
  }},
  function() {
    if (!($(this).hasClass('selected'))) {
    if ($(this).hasClass('large-card-desktop-nav-label')) {
      index = $(this).parent().index();
    } else if ($(this).hasClass('large-card-nav-inner')) {
      index = $(this).parent().parent().index();
    }
    removeLabelHover(desktopLargeCardNavLabel, index);
    removeInnerHover(desktopLargeCardInnerNav, index);
  }}
);

$('.netease-desktop-nav-label, .netease-nav-inner').hover(function() {
    if (!($(this).hasClass('selected'))) {
    if ($(this).hasClass('netease-desktop-nav-label')) {
      index = $(this).parent().index();
    } else if ($(this).hasClass('netease-nav-inner')) {
      index = $(this).parent().parent().index();
    }
    addLabelHover(desktopNetEaseNavLabel, index);
    addInnerHover(desktopNetEaseInnerNav, index);
  }},
  function() {
    if (!($(this).hasClass('selected'))) {
    if ($(this).hasClass('netease-desktop-nav-label')) {
      index = $(this).parent().index();
    } else if ($(this).hasClass('netease-nav-inner')) {
      index = $(this).parent().parent().index();
    }
    removeLabelHover(desktopNetEaseNavLabel, index);
    removeInnerHover(desktopNetEaseInnerNav, index);
  }}
);

$('.cbs-desktop-nav-label, .cbs-nav-inner').hover(function() {
    if (!($(this).hasClass('selected'))) {
    if ($(this).hasClass('cbs-desktop-nav-label')) {
      index = $(this).parent().index();
    } else if ($(this).hasClass('cbs-nav-inner')) {
      index = $(this).parent().parent().index();
    }
    addLabelHover(desktopCBSNavLabel, index);
    addInnerHover(desktopCBSInnerNav, index);
  }},
  function() {
    if (!($(this).hasClass('selected'))) {
    if ($(this).hasClass('cbs-desktop-nav-label')) {
      index = $(this).parent().index();
    } else if ($(this).hasClass('cbs-nav-inner')) {
      index = $(this).parent().parent().index();
    }
    removeLabelHover(desktopCBSNavLabel, index);
    removeInnerHover(desktopCBSInnerNav, index);
  }}
);

//Occurs when the window is resized
$(window).resize(function() {
  //Accounts for resizing the handles for small cards
  var parentWidth = $('.before-after-wrapper').width();
  $('#handle1').css('left', (100-percentage1)  + "%");
  $('#handle2').css('left', (100-percentage2)  + "%");
  $('#handle3').css('left', (100-percentage3)  + "%");

  //Acccounts for resizing the mobile small cards
  if ($(window).width() > 960) {
    showSmallCards($('#wrapper1'));
    showSmallCards($('#wrapper2'));
    showSmallCards($('#wrapper3'));
  } else {
    for (var i = 0; i < smallCardMobileItem.length; i++) {
      var smallCardID = '#' + smallCardMobileItem[i].id;
      if (i == currentSmallCardIndex) {
        showSmallCards($(smallCardID));
      } else {
        hideSmallCards($(smallCardID));
      }
    }
  }

  });


function animateWorkContainer() {
    if (percentInViewport("#my-work-container", 50)) {
    $('#my-work-container').css("opacity", 1);
    $('#my-work-container').addClass("fadeInUp");
  }
}

 // The function returns true when X percent (as a number from 0 to 100) of the element is visible. 
 // Only determines if the measurements of the element are visible and not if
 // the element is hidden with opacity, visibility etc..
function percentInViewport(objectString, percentVisible) {
    var el = document.querySelector(objectString);
    if (el!=null) {
      rect = el.getBoundingClientRect();
      windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  return !(
    Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
    Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
  }
}

/**Initalizes both description and image**/
function initalizeDescriptionImage(classListDes, classListImage, classListMobile, length) {
   for (var i = 0; i < length; i++) {
    if (i == 0) {
      classListDes[i].classList.add("fadeIn");

      classListImage[i].classList.add("bring-to-front");

      classListMobile[i].classList.add("fadeIn");
    } else {
      classListDes[i].classList.add("hidden");

      classListMobile[i].classList.add("hidden");
    }
  } 
}

function changeDesktopImage(classListImage, currentIndex, selectedIndex) {
  classListImage[currentIndex].classList.remove("bring-to-front");
  classListImage[selectedIndex].classList.add("visible");
  classListImage[selectedIndex].classList.add("reveal");
  classListImage[selectedIndex].classList.add("bring-to-front");
  classListImage[currentIndex].classList.remove("reveal");

  setTimeout(function () {
    classListImage[currentIndex].classList.remove("visible");
  }, 700);
}

/**Initalizes both the line and outer select shape**/
function initializeSelected(classListLine, classListNavOuter, classListNavInner, length) {
  for (var i = 0; i < length; i++) {
    if (i == 0) {
      // classListLine[i].classList.add("visible");
      // classListNavOuter[i].classList.add("visible");
      // classListNavInner[i].classList.add("selected");
    } else {
      classListLine[i].classList.add("hidden");
      classListNavOuter[i].classList.add("hidden");
      classListNavInner[i].classList.add("deselected");

    }
  }
}

//calculates the starting clipping and handle position and labels
function calcStartClip() {
  $('#handle1').css('left', 100-percentage1 + "%");
  $('#old1').css("clip-path", "inset(0 " + (percentage1) + "% 0 0)");
  changeBeforeAfterStatus(percentage1, $("#before-status1"), $('#after-status1'));

  $('#handle2').css('left', 100-percentage2 + "%");
  $('#old2').css("clip-path", "inset(0 " + (percentage2) + "% 0 0)");
  changeBeforeAfterStatus(percentage2, $("#before-status2"), $('#after-status2'));

  $('#handle3').css('left', 100-percentage3 + "%");
  $('#old3').css("clip-path", "inset(0 " + (percentage3) + "% 0 0)");
  changeBeforeAfterStatus(percentage3, $("#before-status3"), $('#after-status3'));
}

//There's a 1.29 percent offset, offset calculate still not quite right
function changeBeforeAfterStatus(percent, before, after) {
  var activeColor = '#EB4C5A';
  var inactiveColor = '#B4B4B4';
  if (percent >= 50) {
    after.css('color', activeColor);
    before.css('color', inactiveColor);
  } else {
    after.css('color', inactiveColor);
    before.css('color', activeColor);
  }
}

//This is for the first handle
$('#handle1').draggable({
    drag: function() {
        var xPos = $(this).position().left;
        var parentWidth = $(this).parent().width();
        // var parentWidth = $('.before-after-wrapper').width();
        var offset = (parentWidth/100) * 1.29;
        parentWidth = parentWidth - offset;
        percentage1 = 100 - parseFloat((xPos/parentWidth) * 100).toFixed(2);
        //need the old
        changeBeforeAfterStatus(percentage1, $("#before-status1"), $('#after-status1'));
        $('#old1').css("clip-path", "inset(0 " + percentage1 + "% 0 0)");

    },
    axis: "x",
    containment: "#wrapper1"
  });

//This is for the second handle
$('#handle2').draggable({
    drag: function() {
        var xPos = $(this).position().left;
        var parentWidth = $(this).parent().width();
        // var parentWidth = $('.before-after-wrapper').width();
        var offset = (parentWidth/100) * 1.29;
        parentWidth = parentWidth - offset;
        percentage2 = 100 - parseFloat((xPos/parentWidth) * 100).toFixed(2);
        changeBeforeAfterStatus(percentage2, $("#before-status2"), $('#after-status2'));
        $('#old2').css("clip-path", "inset(0 " + percentage2 + "% 0 0)");
    },
    axis: "x",
    containment: "#wrapper2"
  });

//This is for the third handle
$('#handle3').draggable({
    drag: function() {
        var xPos = $(this).position().left;
        var parentWidth = $(this).parent().width();
        // var parentWidth = $('.before-after-wrapper').width();
        var offset = (parentWidth/100) * 1.29;
        parentWidth = parentWidth - offset;
        percentage3 = 100 - parseFloat((xPos/parentWidth) * 100).toFixed(2);
        changeBeforeAfterStatus(percentage3, $("#before-status3"), $('#after-status3'));
        $('#old3').css("clip-path", "inset(0 " + percentage3 + "% 0 0)");
    },
    axis: "x",
    containment: "#wrapper3"
  });

/**Selecting the PB navigation on the home page.**/
$('.pb-nav-tab, .pb-desktop-nav-label, .pb-mobile-nav-label').click(function() {
    if ($(this).hasClass('mobile-horizontal-item')) {
      selectedIndexPB = $(this).index();
    } else {
      selectedIndexPB = $(this).parent().index();
    }
    if (selectedIndexPB != currentIndexPB) {
      var length = desktopPBDes.length;
      changeMobileTabs(mobilePBNavLabel, length, selectedIndexPB);
      changeMobileContent(mobilePBContent, currentIndexPB, selectedIndexPB);
      changeDesktopSelected(desktopPBLine, desktopPBOuterNav, desktopPBInnerNav, length, selectedIndexPB);
      changeDesktopLabel(desktopPBNavLabel, length, selectedIndexPB);
      changeDesktopDes(desktopPBDes, currentIndexPB, selectedIndexPB);
      changeDesktopImage(desktopPBImage, currentIndexPB, selectedIndexPB);
    }
    currentIndexPB = selectedIndexPB;
})

/**Selecting the VIP navigation on the pixelberry page.**/
$('.vip-nav-tab, .vip-desktop-nav-label, .vip-mobile-nav-label').click(function() {
  if ($(this).hasClass('mobile-horizontal-item')) {
    selectedIndexVIP = $(this).index();
  } else {
    selectedIndexVIP = $(this).parent().index();
  }
  if (selectedIndexVIP != currentIndexVIP) {
    var length = desktopVIPDes.length;
    changeMobileTabs(mobileVIPNavLabel, length, selectedIndexVIP);
    changeMobileContent(mobileVIPContent, currentIndexVIP, selectedIndexVIP);
    changeDesktopSelected(desktopVIPLine, desktopVIPOuterNav, desktopVIPInnerNav, length, selectedIndexVIP);
    changeDesktopLabel(desktopVIPNavLabel, length, selectedIndexVIP);
    changeDesktopDes(desktopVIPDes, currentIndexVIP, selectedIndexVIP);
    changeDesktopImage(desktopVIPImage, currentIndexVIP, selectedIndexVIP);
  }
  currentIndexVIP = selectedIndexVIP;
})

/**Selecting the Large Card navigation on the pixelberry page.**/
$('.large-card-nav-tab, .large-card-desktop-nav-label, .large-card-mobile-nav-label').click(function() {
  if ($(this).hasClass('mobile-horizontal-item')) {
    selectedIndexLargeCard = $(this).index();
  } else {
    selectedIndexLargeCard = $(this).parent().index();
  }
  if (selectedIndexLargeCard != currentIndexLargeCard) {
    var length = desktopLargeCardDes.length;
    changeMobileTabs(mobileLargeCardNavLabel, length, selectedIndexLargeCard);
    changeMobileContent(mobileLargeCardContent, currentIndexLargeCard, selectedIndexLargeCard);
    changeDesktopSelected(desktopLargeCardLine, desktopLargeCardOuterNav, desktopLargeCardInnerNav, length, selectedIndexLargeCard);
    changeDesktopLabel(desktopLargeCardNavLabel, length, selectedIndexLargeCard);
    changeDesktopDes(desktopLargeCardDes, currentIndexLargeCard, selectedIndexLargeCard);
    changeDesktopImage(desktopLargeCardImage, currentIndexLargeCard, selectedIndexLargeCard);
  }
  currentIndexLargeCard = selectedIndexLargeCard;
})

/**Selecting the mocks and implementation module on NetEase page.**/
$('.netease-nav-tab, .netease-desktop-nav-label, .netease-mobile-nav-label').click(function() {
  if ($(this).hasClass('mobile-horizontal-item')) {
    selectedIndexNetEase = $(this).index();
  } else {
    selectedIndexNetEase = $(this).parent().index();
  }
  if (selectedIndexNetEase != currentIndexNetEase) {
    var length = desktopNetEaseDes.length;
    changeMobileTabs(mobileNetEaseNavLabel, length, selectedIndexNetEase);
    changeMobileContent(mobileNetEaseContent, currentIndexNetEase, selectedIndexNetEase);
    changeDesktopSelected(desktopNetEaseLine, desktopNetEaseOuterNav, desktopNetEaseInnerNav, length, selectedIndexNetEase);
    changeDesktopLabel(desktopNetEaseNavLabel, length, selectedIndexNetEase);
    changeDesktopDes(desktopNetEaseDes, currentIndexNetEase, selectedIndexNetEase);
    changeDesktopImage(desktopNetEaseImage, currentIndexNetEase, selectedIndexNetEase);
  }
  currentIndexNetEase = selectedIndexNetEase;
})

/**Selecting the mocks and implementation module on CBS Interactive page.**/
$('.cbs-nav-tab, .cbs-desktop-nav-label, .cbs-mobile-nav-label').click(function() {
  if ($(this).hasClass('mobile-horizontal-item')) {
    selectedIndexCBS = $(this).index();
  } else {
    selectedIndexCBS = $(this).parent().index();
  }
  if (selectedIndexCBS != currentIndexCBS) {
    var length = desktopCBSDes.length;
    changeMobileTabs(mobileCBSNavLabel, length, selectedIndexCBS);
    changeMobileContent(mobileCBSContent, currentIndexCBS, selectedIndexCBS);
    changeDesktopSelected(desktopCBSLine, desktopCBSOuterNav, desktopCBSInnerNav, length, selectedIndexCBS);
    changeDesktopLabel(desktopCBSNavLabel, length, selectedIndexCBS);
    changeDesktopDes(desktopCBSDes, currentIndexCBS, selectedIndexCBS);
    changeDesktopImage(desktopCBSImage, currentIndexCBS, selectedIndexCBS);
  }
  currentIndexCBS = selectedIndexCBS;
})


/**Used to for description transitions for mobile**/
function changeMobileContent(classListContent, currentIndex, selectedIndex) {
  //hide the currrent content
  classListContent[currentIndex].classList.remove('fadeIn');
  classListContent[currentIndex].classList.add('fadeOut');
  classListContent[currentIndex].classList.add('hidden');
  //show the selected content
  classListContent[selectedIndex].classList.remove('fadeOut');
  classListContent[selectedIndex].classList.remove('hidden');
  classListContent[selectedIndex].classList.add('fadeIn');
}

/**Used to change section navigation tabs for mobile*/
function changeMobileTabs(classListLabel, length, selectedIndex) {
  for (var i = 0; i < length; i++) {
    if (i == selectedIndex) {
      classListLabel[i].classList.add("selected");
      classListLabel[i].classList.remove("deselected");
    } else {
      classListLabel[i].classList.add("deselected");
      classListLabel[i].classList.remove("selected");
    }
  }
}



function changeDesktopDes(classListDes, currentIndex, selectedIndex) {
  //hide the current content
  classListDes[currentIndex].classList.remove("fadeIn");
  classListDes[currentIndex].classList.add("fadeOut");
  classListDes[currentIndex].classList.add("hidden");
  //show the selected content
  classListDes[selectedIndex].classList.remove("hidden");
  classListDes[selectedIndex].classList.remove("fadeOut");
  classListDes[selectedIndex].classList.add("fadeIn");
}


function changeDesktopLabel(classListLabel, length, selectedIndex) {
  for (var i = 0; i < length; i++) {
    if (i == selectedIndex) {
        classListLabel[selectedIndex].classList.add("selected");
        classListLabel[selectedIndex].classList.remove("deselected");
        classListLabel[selectedIndex].classList.remove("leftright");
        classListLabel[selectedIndex].classList.remove("topdown");
    } else {
        classListLabel[i].classList.remove("selected");
        classListLabel[i].classList.add("deselected");
    }
  }
}

/**Change the line and outer nav when switching selections**/
function changeDesktopSelected(classListLine, classListNavOuter, classListNavInner, length, selectedIndex) {
  for (var i = 0; i < length; i++) {
    if (i == selectedIndex) {
      classListLine[selectedIndex].classList.add("visible");
      classListLine[selectedIndex].classList.remove("hidden");
      classListNavOuter[selectedIndex].classList.add("visible");
      classListNavOuter[selectedIndex].classList.remove("hidden");
      classListNavInner[i].classList.add("selected");
      classListNavInner[i].classList.remove("deselected");


    } else {
      classListLine[i].classList.remove("visible");
      classListLine[i].classList.add("hidden");
      classListNavOuter[i].classList.remove("visible");
      classListNavOuter[i].classList.add("hidden");
      classListNavInner[i].classList.remove("hover");
      classListNavInner[i].classList.remove("selected");
      classListNavInner[i].classList.add("deselected");
    }
  }
}

//Calculates if the last item of the  mobile navigation tabs is viewed, if so it fades in the gradient
//Doesn't work with resizing.
  $('.home-gradient-one').scroll( function() {
      var scrollLeft  = $('.home-gradient-one').scrollLeft();
      var gradWidth = $(".home-gradient-one").outerWidth();
      var itemWidth = $(".home-gradient-one")[0].scrollWidth;

      if (scrollLeft >= (Math.abs(itemWidth - gradWidth) - 20)) {
        $(".home-gradient-one").addClass('special');
      }
      else {
        $(".home-gradient-one").removeClass('special');
      }
  });

/**For the dropdown navigation for mobile small card view.*/
$(window).click(function(event) {
  var $target = $(event.target);
  if (($target.is('.small-card-dropdown-button')) || ($target.is('.dropdown-text')) || ($target.is('.fas'))) {
    $('.small-card-dropdown-list').addClass('show');
  } else {
    $('.small-card-dropdown-list').removeClass('show');
  }
});


function changeMobileSmallCard(current, selected) {
  hideSmallCards(current);
  showSmallCards(selected);
}

function hideSmallCards(element) {
  element.removeClass('fadeIn');
  element.css("height", "0");
  element.css("opacity", "0");
}

function showSmallCards(element) {
  element.css("height", "100%");
  element.css("opacity", "1");
  element.addClass('fadeIn');
}

/**To hide and show the small card items on mobile.**/
$('#sm-card-item-1, #sm-card-item-2, #sm-card-item-3').click(function() {
  selectedIndex = $(this).index();
  var selectedSmallCardID = '#' + smallCardMobileItem[selectedIndex].id;
  changeMobileSmallCard($(currentSmallCardID), $(selectedSmallCardID));
  currentSmallCardID = selectedSmallCardID;
  currentSmallCardIndex = selectedIndex;
});

/**For bringing up the side navigation bar on mobile.*/
document.getElementById("toggle").onclick = function() {
    document.getElementById("dropdown").style.visibility = "visible";
    document.getElementById("dropdown").style.transform = "translate3d(0, 0, 0)";
};

$(".close-button").click(function() {
    document.getElementById("dropdown").style.visibility= "hidden";
    document.getElementById("dropdown").style.transform = "translate3d(100%, 0, 0)";
  });



})