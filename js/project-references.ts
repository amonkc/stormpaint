import "../sass/project-references.scss";
import $ from "jquery";
import "./vendor/slick.js";

$(() => {
  var mainSlick = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".1-n"
  };

  var navSlick = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".1-t",
    centerMode: true,
    focusOnSelect: true,
    arrows: false
  };

  $(".1-t").slick($.extend({}, mainSlick, { asNavFor: ".1-n" }));
  $(".1-n").slick($.extend({}, navSlick, { asNavFor: ".1-t" }));

  $(".2-t").slick($.extend({}, mainSlick, { asNavFor: ".2-n" }));
  $(".2-n").slick($.extend({}, navSlick, { asNavFor: ".2-t" }));

  $(".3-t").slick($.extend({}, mainSlick, { asNavFor: ".3-n" }));
  $(".3-n").slick($.extend({}, navSlick, { asNavFor: ".3-t" }));

  $(".4-t").slick($.extend({}, mainSlick, { asNavFor: ".4-n" }));
  $(".4-n").slick($.extend({}, navSlick, { asNavFor: ".4-t" }));
});
