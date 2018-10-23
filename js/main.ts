import "../sass/index.scss";
import $ from "jquery";

$(() => {
  let currentLanguage = "TH";

  $('[name="lang-switch"]').change(e => {
    const target = e.currentTarget || e.target;
    const selectedLang = $(target).val();

    currentLanguage = selectedLang as string;

    console.log(currentLanguage);

    //Hide other language
    $(".product-item__details [data-lang]").css({
      display: "none"
    });

    //Show selected (current) language
    $('.product-item__details [data-lang="' + currentLanguage + '"]').css({
      display: "block"
    });
  });
});
