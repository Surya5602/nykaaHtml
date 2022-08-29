const btn = document.getElementById("view-offers");
const view = document.getElementById("hide");
const section = document.querySelector(".content-box");
const intial = section.getBoundingClientRect();
const sticky = document.querySelector(".right-side");

window.addEventListener("scroll", () => {
  if (window.scrollY > 750) sticky.classList.add("sticky");
  else sticky.classList.remove("sticky");
});
btn.addEventListener("click", () => {
  view.classList.toggle("hidden");
  if (view.classList.contains("hidden")) {
    btn.innerHTML = "View More Offers";
  } else {
    btn.innerHTML = "View Less";
  }
});

const readBtn = document.getElementById("read-more");
const pannel = document.querySelector(".tab-content");
readBtn.addEventListener("click", () => {
  pannel.classList.toggle("content-size");
  if (pannel.classList.contains("content-size"))
    readBtn.innerHTML = "Read More";
  else readBtn.innerHTML = "Read Less";
});
// const arr ="";
// for(let i=0;i<arr.length;i++){
//   console.log(`<a href="#">${arr[i]}</a>`)
// }

// document.querySelector(".fourth").onmouseover = function () {
//   mouseOver12();
// };
// function mouseOver12() {

// }
var header = document.getElementById("nav-tab");
var buttons = header.getElementsByClassName("nav-link2");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

document.querySelector(".one").onmouseover = function () {
  mouseOver1();
};
function mouseOver1() {
  document.getElementById("content1").innerHTML =
    '<a href="#"><b>Face</b></a><a href="#">Face Primer</a><a href="#">Concealer</a><a href="#">Foundation</a><a href="#">Compact</a><a href="#">Contour</a><a href="#">Loose Powder</a><a href="#">Tinted Moisturizer</a><a href="#">Blush</a><a href="#">Bronzer</a><a href="#">BB & CC Cream</a><a href="#">Highlighters</a><a href="#">Setting Spray</a><a href="#">Makeup Remover</a><a href="#">Sindoorr</a>';
  document.getElementById("content2").innerHTML =
    '<a href="#"><b>Eyes</b></a><a href="#">Kajal</a><a href="#">Eyeliner</a><a href="#">Mascara</a><a href="#">Eye Shadow</a><a href="#">Eye Brow Enhancers</a><a href="#">Eye Primer</a><a href="#">False Eyelashes</a><a href="#">Eye Makeup Remover</a><a href="#">Under Eye Concealer</a><a href="#">Contact Lenses</a><br><a href="#"><b>Makeup Kits & Combos</b></a><a href="#">Makeup Kits</a><a href="#">Makeup Combos</a>';
  document.getElementById("content3").innerHTML =
    '<a href="#"><b>Lips</a></b> <a href="#">Lipstick</a> <a href="#">Liquid Lipstick</a> <a href="#">Lip Crayon</a> <a href="#">Lip Gloss</a> <a href="#">Lip Liner</a> <a href="#">Lip Plumper</a> <a href="#">Lip Stain</a> <br><a href="#"><b>Nails</a></b><a href="#">Nail Polish</a> <a href="#">Nail Art Kits</a> <a href="#">Nail Care</a> <a href="#">Nail Polish Remover</a>';
  document.getElementById("content4").innerHTML =
    '<a href="#"><b>Tools & Brushes</b></a><a href="#">Face Brush</a><a href="#">Eye Brush</a><a href="#">Lip Brush</a><a href="#">Brush Sets</a><a href="#">Brush Cleaners</a><a href="#">Sponges & Applicators</a><a href="#">Eyelash Curlers</a><a href="#">Tweezers</a><a href="#">Sharpeners</a><a href="#">Mirrors</a><a href="#">Makeup Pouches</a><br><a href="#"><b>Multi-Functional Makeup Palette</b></a>';
  document.getElementById("content5").innerHTML =
    '<a href="#"><b>Top Brands</b></a><a href="#">Kay Beauty</a><a href="#">Huda Beauty</a><a href="#">Charlotte Tilbury</a><a href="#">M.A.C</a><a href="#">Maybelline New York</a><a href="#">LOreal Paris</a><a href="#">Lakme</a><a href="#">Nykaa Cosmetics</a><a href="#">Nyx Pro.Makeup</a>';
  document.getElementById("content6").innerHTML =
    '<a href="#"><b>Quick Links</b></a> <a href="#">Combos @ Nykaa</a> <a href="#">New Launches</a> <a href="#">NFBA Nominees 2020</a> <a href="#">Gifts @ Nykaa</a> <a href="#">The Gift Store</a><br> <a href="#"><b>Trending Searches</b></a> <a href="#">Nude Lipstick</a> <a href="#">Matte Lipstick</a> <a href="#">Red Lipstick</a> <a href="#">Pink Lipstick</a>';
}
document.querySelector(".two").onmouseover = function () {
  mouseOver2();
};
function mouseOver2() {
  document.getElementById("content1").innerHTML =
    '<a href="#"><b>Moisturizers</b></a> <a href="#">Face Moisturizer</a> <a href="#">Night Cream</a> <a href="#">Face Oils</a> <a href="#">All Purpose Gels/Creams</a> <a href="#"><br><b>Face Serums</b></a><br> <a href="#"><b>Cleansers</b></a> <a href="#">Face Wash & Cleanser</a> <a href="#">Cleansing Oils & Balm</a> <a href="#">Micellar Water</a> <a href="#">Face Wipes</a> <a href="#">Makeup Remover</a> <a href="#">Face Scrub</a>';
  document.getElementById("content2").innerHTML =
    '<a href="#"><b>Trending Searches</b></a><a href="#">Toners Under 1000</a><a href="#">Face Wash For Oily Skin</a><a href="#">Oil Free Face Moisturizers</a><a href="#">Lip Balm Under 500</a><a href="#">Vitamin C Serum</a><br><a href="#"><b>Masks</b></a><a href="#">Sheet Masks</a><a href="#">Sleeping Masks</a><a href="#">Face Masks & Packs</a><a href="#">Face Packs</a><a href="#">Face Bleach</a><br><a href="#"><b>Toners & Mists</b></a><a href="#">Toners</a><a href="#">Facial Mists</a><a href="#">Rose Water</a>';
  document.getElementById("content3").innerHTML =
    '<a href="#"><b>Bath & Body</a></b><a href="#">Body Lotions</a><a href="#">Body Butter</a><a href="#">Body Oils</a><a href="#">Shower Gels And Body Wash</a><a href="#">Soaps</a><a href="#">Body Scrubs</a><a href="#">Bath Salts</a><a href="#">Scrubs And Loofahs</a><br><a href="#"><b>Hands And Feet</b></a><a href="#">Hand Creams</a><a href="#">Foot Creams</a><a href="#">Hand & Foot Masks</a>';
  document.getElementById("content4").innerHTML =
    '<a href="#"><b>Specialised Skincare</b></a> <a href="#">Acne Spot Correctors</a> <a href="#">Neck Creams</a> <a href="#">Nose Strips</a> <a href="#">Facial Peels</a><br> <a href="#"><b>Eye Care</a></b> <a href="#">Eye Serums & Creams</a> <a href="#">Eye Masks</a><br> <a href="#"><b>Lip Care</b></a> <a href="#">Lip Balm</a> <a href="#">Lip Scrubs</a> <a href="#">Lip Masks</a> <br><a href="#"><b>Sunscreen</b></a> <a href="#">Face Sunscreen</a> <a href="#">Body Sunscreen</a>';
  document.getElementById("content5").innerHTML =
    '<a href="#"><b>Kits And Combos</b></a><a href="#">Facial Kits</a><a href="#">Kits & Combos</a><a href="#">Gift Sets</a><br><a href="#"><b>Skin Tools</b></a><a href="#">Face Massagers</a><a href="#">Cleansing Brushes</a><a href="#">Blackhead Remover</a><a href="#">Dermarollers</a><br><a href="#"><b>Skin Supplements</b></a><a href="#">Vitamins & Minerals</a><a href="#">Ayurvedic Herbs</a>';
  document.getElementById("content6").innerHTML =
    '<a href="#"><b>Shop By Concern</b></a><a href="#">Acne</a><a href="#">Dull Skin</a><a href="#">Pigmentation</a><a href="#">Wrinkles & Fine Lines</a><a href="#">Pores</a><a href="#">Dark Spots</a><a href="#">Face Tan</a><a href="#">Oil Control</a><br><a href="#"><b>New Launches</b></a><br><a href="#"><b>Quick Links</b></a><a href="#">The Gift Store</a>';
}
document.querySelector(".three").onmouseover = function () {
  mouseOver3();
};
function mouseOver3() {
  document.getElementById("content1").innerHTML =
    '<a href="#"><b>Hair Care</b></a><a href="#">Shampoo</a><a href="#">Dry Shampoo <span style="background-color:green; color:white;">NEW</span></a><a href="#">Conditioner</a><a href="#">Hair Oil</a><a href="#">Hair Serum</a><a href="#">Hair Creams & Masks</a><a href="#">Nutritional Supplements</a>';
  document.getElementById("content2").innerHTML =
    '<a href="#"><b>Tools & Accessories</b></a><a href="#">Hair Brushes</a><a href="#">Hair Combs</a><a href="#">Dryers & Stylers</a><a href="#">Straighteners</a><a href="#">Rollers & Curlers</a><a href="#">Hair Extensions</a><a href="#">Hair Accessories</a>';
  document.getElementById("content3").innerHTML =
    '<a href="#"><b>Hair Styling</b></a><a href="#">Hair Color</a><a href="#">Hair Spray</a><a href="#">Gels & Waxes</a><br><a href="#"><b>Shop By Hair Type</b></a><a href="#">Straight</a><a href="#">Curly & Wavy</a><br><a href="#"><b>Professional Brands</b></a>';
  document.getElementById("content4").innerHTML =
    '<a href="#"><b>Shop By Concern</b></a><a href="#">Hairfall & Thinning</a><a href="#">Dandruff</a><a href="#">Dry & Frizzy Hair</a><a href="#">Split Ends</a><a href="#">Color Protection</a><br><a href="#"><b>Trending Searches</b></a><a href="#">Hair Growth Oil</a><a href="#">Dandruff Shampoo</a><a href="#">Castor Oil For Hair</a><a href="#">Sulphate Free Shampoo</a><a href="#">Hair Straightener Brush</a>';
  document.getElementById("content5").innerHTML =
    '<a href="#"><b>Top Brands</b></a><a href="#">Nykaa Naturals</a><a href="#">LOreal Paris</a><a href="#">Wella Professionals</a><a href="#">LOreal Professionnel</a><a href="#">BBlunt</a><a href="#">Herbal Essences</a><a href="#">Schwarzkopf Professional</a>';
  document.getElementById("content6").innerHTML =
    '<a href="#"><b>Quick Links</b></a><a href="#">Combos @ Nykaa</a><a href="#">New Launches</a><a href="#">NFBA Nominees 2020</a><a href="#">Herbal Hair Care</a><a href="#">Routine Finder</a><a href="#">The Beauty Ingredient Edit</a><a href="#">The Safe Beauty Edit</a><a href="#">The Gift Store</a>';
}
document.querySelector(".four").onmouseover = function () {
  mouseOver4();
};
function mouseOver4() {
  document.getElementById("content1").innerHTML =
    '<a href="#"><b>Hair Styling Tools</b></a><a href="#">Hair Dryers</a><a href="#">Straighteners</a><a href="#">Curling Iron/Stylers</a><a href="#">Multi Stylers</a>';
  document.getElementById("content2").innerHTML =
    '<a href="#"><b>Hair Removal Tools</b></a><a href="#">Epilators</a><a href="#">Body Groomers</a><a href="#">Bikini Trimmers</a>';
  document.getElementById("content3").innerHTML =
    '<a href="#"><b>Shaving Tools</b></a><a href="#">Shavers</a><a href="#">Trimmers</a>';
  document.getElementById("content4").innerHTML =
    '<a href="#"><b>Face/Skin Tools</b></a><a href="#">Face Epilator</a><a href="#">Dermarollers</a><a href="#">Cleansing Brushes</a><a href="#">Acne Removal</a><br><a href="#"><b>Massage Tools</b></a><a href="#">Massagers</a><br><a href="#"><b>Foot Care</b></a>';
  document.getElementById("content5").innerHTML =
    '<a href="#"><b>Top Brands</b></a><a href="#">Philips</a><a href="#">Alan Truman</a><a href="#">Dyson</a><a href="#">VEGA</a><a href="#">Braun</a><a href="#">Ikonic Professional</a><a href="#">Nova</a><a href="#">Flawless</a>';
  document.getElementById("content6").innerHTML =
    '<a href="#"><b>Quick Links</b></a><a href="#">Combos @ Nykaa</a><a href="#">New Launches</a><a href="#">NFBA Nominees 2020</a><a href="#">Gifts @ Nykaa</a><a href="#">Herbal Hair Care</a><a href="#">Routine Finder</a>';
}
document.querySelector(".five").onmouseover = function () {
  mouseOver5();
};
function mouseOver5() {
  document.getElementById("content1").innerHTML =
    '<a href="#"><b>Bath & Shower</b></a><a href="#">Shower Gels & Body Wash</a><a href="#">Body Scrubs & Exfoliants</a><a href="#">Soaps</a><a href="#">Bath Salts</a><a href="#">Bath Accessories</a><br><a href="#"><b>Body Care</b></a><a href="#">Body Lotions & Moisturizers</a><a href="#">Deodorants/Roll Ons</a><a href="#">Body Butters</a><a href="#">Massage Oils</a><a href="#">Essential Oils</a><a href="#">Talcum Powder</a><a href="#">Intimate Care</a>';
  document.getElementById("content2").innerHTML =
    '<a href="#"><b>Feminine Hygiene</b></a><a href="#">Sanitary Napkins</a><a href="#">Menstrual Cups</a><a href="#">Tampons</a><a href="#">Pantyliners</a><a href="#">Intimate Wash</a><a href="#">Other Period Essentials</a><br><a href="#"><b>Shaving & Hair Removal</b></a><a href="#">Body Razors & Cartridges</a><a href="#">Face & Eyebrow Razors</a><a href="#">Wax & Wax Strips</a><a href="#">Hair Removal Creams</a><a href="#">Epilators & Bikini Trimmers</a><a href="#">Pre & Post Wax Essentials</a>';
  document.getElementById("content3").innerHTML =
    '<a href="#"><b>Mens Grooming</b></a><a href="#">Razors & Catridges</a><a href="#">Shaving Cream, Foams & Gels</a><a href="#">Pre & Post Shaves</a><a href="#">Shavers & Trimmers</a><a href="#">Beard & Moustache Care</a><a href="#">Intimate Care</a><br><a href="#"><b>Hands & Feet</b></a><a href="#">Hand Wash</a><a href="#">Hand Creams & Masks</a><a href="#">Foot Care</a><a href="#">Manicure Pedicure Tools & Kits</a>';
  document.getElementById("content4").innerHTML =
    '<a href="#"><b>Hygiene Essentials</b></a><a href="#">Face Mask</a><a href="#">Hand Sanitizer</a><a href="#">Gloves PPE & Face Shields</a><br><a href="#"><b>Oral Care</b></a><a href="#">Toothpaste</a><a href="#">Electric Toothbrush</a><a href="#">Manual Toothbrush</a><a href="#">Mouthwash</a><a href="#">Floss & Tongue Cleaners</a>';
  document.getElementById("content5").innerHTML =
    '<a href="#"><b>Kits & Combos</b></a><a href="#">Bath & Body Kits</a><a href="#">Bath & Body Combos</a><br><a href="#"><b>Top Brands</b></a><a href="#">MCaffeine</a><a href="#">Wanderlust</a><a href="#">Whisper</a><a href="#">Gillette</a><a href="#">Dove</a><a href="#">Sanfe</a>';
  document.getElementById("content6").innerHTML =
    '<a href="#"><b>Quick Links</b></a><a href="#">Combos @ Nykaa</a><a href="#">New Launches</a><a href="#">NFBA Nominees 2020</a><a href="#">Gifts @ Nykaa</a><a href="#">Routine Finder</a><a href="#">The Gift Store</a><br><a href="#"><b>Trending Searches</b></a><a href="#">Body Wash</a><a href="#">Body Lotions</a><a href="#">Face Razors For Women</a><a href="#">Sanitary Napkins</a><a href="#">Body Scrubs</a><a href="#">Deodorants</a>';
}
document.querySelector(".six").onmouseover = function () {
  mouseOver6();
};
function mouseOver6() {
  document.getElementById("content1").innerHTML =
    '<a href="#"><b>Skin</b></a> <a href="#">Face Wash</a> <a href="#">Cleanser</a> <a href="#">Moisturizer</a> <a href="#">Face Cream</a> <a href="#">Face Mist</a> <a href="#">Facial Kits</a> <a href="#">Toner</a> <a href="#">Face Oils</a> <a href="#">Sunscreen</a> <a href="#">Night Cream</a> <a href="#">Day Cream</a> <a href="#">Under Eye Care</a> <a href="#">Face Bleach</a> <a href="#">Serums</a>';
  document.getElementById("content2").innerHTML =
    '<a href="#"><b>Skin</b></a><a href="#">Sheet Masks</a><a href="#">Masks & Peels</a><a href="#">Scrubs & Exfoliators</a><a href="#">Face Tools</a><a href="#">Face Gel</a><a href="#">Lip Scrub</a><br><a href="#"><b>Body Care</b> </a><a href="#">Shower Gels & Body Wash</a><a href="#">Soaps</a><a href="#">Body Lotions</a><a href="#">Body Scrubs</a><a href="#">Bath Salts & Bath Bombs</a><a href="#">Hands & Feet Care</a><a href="#">Bath Tools & Accessories</a><a href="#">Oral Care</a>';
  document.getElementById("content3").innerHTML =
    '<a href="#"><b>Hair</b></a><a href="#">Shampoo & Cleanser</a><a href="#">Conditioner</a><a href="#">Hair Masks</a><a href="#">Hair Oil</a><a href="#">Hair Serum</a><a href="#">Hair Color</a><a href="#">Tools & Accessories</a><br><a href="#"> <b>Aromatherapy</b>  </a><a href="#">Massage Oils</a><a href="#">Carrier Oils</a><a href="#">Essential Oils</a><a href="#">Candles</a><a href="#">Diffuser</a><a href="#">Incense Sticks</a>';
  document.getElementById("content4").innerHTML =
    '<a href="#"><b>Makeup</b></a><a href="#">Lipstick</a><a href="#">Kajal</a><a href="#">Eyeliner</a><a href="#">Mascara</a><a href="#">Nail Polish</a><a href="#">Lip Balm & Gloss</a><a href="#">Foundation & Concealer</a><a href="#">Blush & Highlighter</a><a href="#">Makeup Remover</a><a href="#">Tools & Brushes</a><br><a href="#"><b>Trending Search</b></a><a href="#">Tea Tree Oil</a><a href="#">Eucalyptus Oil</a><a href="#">Rosemary Oil</a><a href="#">Jojoba Oil</a><a href="#">Peppermint Oil</a>';
  document.getElementById("content5").innerHTML =
    '<a href="#"><b>Top Brands</b></a><a href="#">Biotique</a><a href="#">Lotus Herbals</a><a href="#">The Body Shop</a><a href="#">Nykaa Naturals</a><a href="#">Kama Ayurveda</a><a href="#">Forest Essentials</a><a href="#">Khadi Natural</a><a href="#">Himalaya</a><a href="#">VLCC</a><br><a href="#"><b>Baby Care</b></a><br><a href="#"><b>Types Of Skin</b></a><a href="#">Dry Skin</a><a href="#">Normal Skin</a><a href="#">Oily Skin</a><a href="#">Combination Skin</a>';
  document.getElementById("content6").innerHTML =
    '<a href="#"><b>Shop By Concern</b></a><a href="#">Tan Removal</a><a href="#">Pigmentation</a><a href="#">Acne Treatment</a><a href="#">Skin Lightening</a><a href="#">Anti Aging</a><a href="#">Dark Circles</a><a href="#">Hairfall</a><a href="#">Dandruff</a><a href="#">Dry & Frizzy Hair</a><br><a href="#"><b>QUICK LINKS</b></a><a href="#">New Launches</a><a href="#">Combos @ Nykaa</a><a href="#">Gifts @ Nykaa</a><a href="#">The Safe (And Clean) Beauty Edit</a>';
}
document.querySelector(".seven").onmouseover = function () {
  mouseOver7();
};
function mouseOver7() {
  document.getElementById("content1").innerHTML =
    '<a href="#"><b>  Baby Care</b></a><a href="#">Body Wash & Soaps</a><a href="#">Baby Oil</a><a href="#">Hair Oil</a><a href="#">Lotions & Creams</a><a href="#">Baby Powder</a><a href="#">Shampoo & Conditioner</a><a href="#">Sunscreen</a><a href="#">Wipes & Buds</a><a href="#">Teeth & Dental Care</a><a href="#">Rash Cream</a><a href="#">Diapers</a><a href="#">Diaper Accessories</a><a href="#">Bath Accessories</a><a href="#">Baby Grooming</a><a href="#">Baby Bedding</a>';
  document.getElementById("content2").innerHTML =
    '<a href="#"><b>Kids Care</b></a><a href="#">Nutritional Supplement</a><a href="#">Body Wash & Soaps</a><a href="#">Lotions & Creams</a><a href="#">Hair Care</a><a href="#">Sunscreen</a><a href="#">Dental Care</a><a href="#">Kids Makeup</a>';
  document.getElementById("content3").innerHTML =
    '<a href="#"><b>Maternity Care</b></a><a href="#">Stretch Mark Creams & Oils</a><a href="#">Breast Firming Gels & Creams</a><a href="#">Nipple Creams</a><a href="#">Nutritional Supplements</a><a href="#">Maternity Pillows</a>';
  document.getElementById("content4").innerHTML =
    '<a href="#"><b>Nursing & Feeding</b></a><a href="#">Feeding Bottle & Nipples</a><a href="#">Teethers & Soothers</a><a href="#">Breast Pumps</a><a href="#">Breast Pads</a><a href="#">Cleaning & Feeding Accessories</a><a href="#">Bibs</a><a href="#">Sippers & Cups</a>';
  document.getElementById("content5").innerHTML =
    '<a href="#"><b>Health & Safety</b></a><a href="#">Nose & Ear Care</a><a href="#">Gripe Water & Tummy Roll On</a><a href="#">Detergents & Cleansers</a><a href="#">Handwash & Sanitizer</a><a href="#">Mosquito Repellent</a><br><a href="#"><b>Maternity Wear</b></a><a href="#">Maternity Bra</a><a href="#">Maternity Dress</a><a href="#">Maternity Tops</a>';
  document.getElementById("content6").innerHTML =
    '<a href="#"><b>Baby Toys</b></a><br><a href="#"><b>Shop By Concerns</b></a><a href="#">Baby Dry Skin</a><a href="#">Cracked Nipple Cream</a><a href="#"><b> Gift Sets</b></a><br><a href="#">Scalp Treatment</a><a href="#">Coconut Oil</a><a href="#">Almond Oil</a><a href="#">Heat Rash</a><a href="#">Body Toning & Firming</a><a href="#">Baby Skin Concerns</a><br><br><a href="#"><b>Combos @ Nykaa</b></a>';
}
document.querySelector(".eight").onmouseover = function () {
  mouseOver8();
};
function mouseOver8() {
  document.getElementById("content1").innerHTML =
    '<a href="#"><b>Health Supplements</b></a> <a href="#">Multivitamins</a> <a href="#">Calcium & Vitamin D</a> <a href="#">Magnesium & Zinc</a> <a href="#">Omega 3 & Fish Oil</a> <a href="#">Immunity Boosters & Vitamin C</a> <a href="#">Other Supplements</a><br> <a href="#"><b>Beauty Supplements</b></a> <a href="#">Collagen (Skin)</a> <a href="#">Biotin (Hair)</a> <a href="#">Vitamin E (Skin)</a> <a href="#">Glutathione (Skin)</a> <a href="#">Other Beauty Supplements</a>';
  document.getElementById("content2").innerHTML =
    '<a href="#"><b>Sports Nutrition</b></a><a href="#">Whey Protein</a><a href="#">Plant Protein</a><a href="#">BCAA & Other Muscle Support</a><a href="#">Protein & Energy Bars</a><a href="#">Protein Snacks</a><br><a href="#"><b>Weight Management</b></a><a href="#">Weight Gain</a><a href="#">Apple Cider Vinegar</a><a href="#">Green Tea</a><a href="#">Green Coffee</a><a href="#">Fat Burner</a><a href="#">Slimming Shakes & Juices</a><a href="#">Sugar Substitutes</a>';
  document.getElementById("content3").innerHTML =
    '<a href="#"><b>Health Foods</b></a><a href="#">Honey</a><a href="#">Dry Fruits, Nuts & Berries</a><a href="#">Edible Seeds</a><a href="#">Oils & Ghee</a><a href="#">Black Tea & Coffee</a><a href="#">Herbal Teas</a><a href="#">Health Drinks</a><a href="#">Breakfast Cereals</a><a href="#">Other Health Foods</a><br><a href="#"><b>Wellness Equipment</b></a><a href="#">Weighing Scales</a><a href="#">Fitness</a><a href="#">Face Steamers</a>';
  document.getElementById("content4").innerHTML =
    '<a href="#"><b>Supports & Braces</b></a><br><a href="#"><b>Pain Relief</b></a><a href="#">Muscles & Joints</a><a href="#">Ortho Oils</a><a href="#">Period Cramps</a><a href="#">Cough & Cold</a><br><a href="#"><b>Sexual Wellness</b></a><a href="#">Condoms</a><a href="#">Lubricants</a><a href="#">Sexual Enhancers</a><br><a href="#"><b>Medical Devices</b></a><a href="#">Oximeters</a>';
  document.getElementById("content5").innerHTML =
    '<a href="#"><b>Ayurveda & Herbs</b></a><a href="#">Ashwagandha</a><a href="#">Neem (Blood Purifier)</a><a href="#">Amla (Immunity, Skin)</a><a href="#">Aloe Vera (Liver, Skin)</a><a href="#">Milk Thistle (Liver)</a><a href="#">Wheatgrass (Detox)</a><a href="#">Tulsi</a><a href="#">Giloy & Guduchi (Immunity)</a><a href="#">Turmeric (Anti Inflamatory)</a><a href="#">Spirulina & Moringa</a><a href="#">Chyavanprash</a><a href="#">Shilajit</a><a href="#">Other Herbal Supplements</a>';
  document.getElementById("content6").innerHTML =
    '<a href="#"><b>Shop By Concern</b></a><a href="#">Diabetes</a><a href="#">Digestion (Gut Health)</a><a href="#">Organs - Liver, Heart, Kidney</a><a href="#">Safety & First Aid</a><a href="#">Weakness & Vitality</a><a href="#">Kids Nutrition</a><a href="#">Mental Wellness</a><a href="#">Blood Pressure</a><a href="#">Hormonal Balance</a><a href="#">Calm & Sleep</a>';
}
document.querySelector(".nine").onmouseover = function () {
  mouseOver9();
};
function mouseOver9() {
  document.getElementById("content1").innerHTML =
    '<a href="#"><b>Shaving</b></a><a href="#">Razors & Cartridges</a><a href="#">Shavers</a><a href="#">Trimmers</a><a href="#">Shaving Creams</a><a href="#">Shaving Foams</a><a href="#">Shaving Gels</a><a href="#">Pre & Post Shaves</a><a href="#">Aftershave Lotion</a><a href="#">Shaving Brushes</a><a href="#">Beard Care</a>';
  document.getElementById("content2").innerHTML =
    '<a href="#"><b>Beard Care</b></a><a href="#">Beard Oil</a> <a href="#">Beard Butter</a> <a href="#">Beard Softener</a> <a href="#">Beard Wash</a> <a href="#">Beard Wax</a> <a href="#">Moustache Oil</a> <a href="#">Beard Comb</a> <a href="#">Moustache Wax</a> <a href="#">Beard Kits</a> <a href="#">Beard Gel</a> <a href="#">Beard Balm</a> <a href="#">Beard Cream</a> <a href="#">Beard Serum</a> <a href="#">Beard Mist</a> <a href="#">Beard Colour</a> <a href="#">Beard Shampoo</a>';
  document.getElementById("content3").innerHTML =
    '<a href="#"><b>Hair Care</b></a><a href="#">Shampoo</a><a href="#">Conditioner</a><a href="#">Hair Styling</a><a href="#">Hair Color</a><a href="#">Hair Oils</a><a href="#">Professional Products</a><br><a href="#"><b>Skin Care</b></a><a href="#">Face Wash</a><a href="#">Moisturizers</a><a href="#">Sunscreen</a><a href="#">Masks & Peels</a><a href="#">Scrubs & Exfoliators</a><a href="#">Fairness</a>';
  document.getElementById("content4").innerHTML =
    '<a href="#"><b>Bath & Body</b></a><a href="#">Bath/Shower Gels</a><a href="#">Soaps</a><a href="#">Body Scrubs</a><a href="#">Talc</a><a href="#">Dental Care</a><a href="#">Body Lotions</a><a href="#">Intimate Care</a><br><a href="#"><b>Grooming Kits</b></a><br><a href="#"><b>Fragrance</b></a><a href="#">Deodorants/Roll Ons</a><a href="#">Colognes & Perfumes (EDT & EDP)</a><a href="#">Luxe Fragrances</a>';
  document.getElementById("content5").innerHTML =
    '<a href="#"><b>Shop By Concern</b></a><a href="#">Anti Dandruff</a><a href="#">Anti Hairfall</a><a href="#">Scalp Treatment</a><a href="#">Anti Acne</a><a href="#">Anti Ageing</a><br><a href="#"><b>Wellness</b></a><a href="#">Sexual Wellness</a><a href="#">Health Supplements</a><a href="#">Weight Management</a><a href="#">Sports Nutrition</a>';
  document.getElementById("content6").innerHTML =
    '<a href="#"><b>Top Brands</b></a><a href="#">Beardo</a><a href="#">Gilette</a><a href="#">Livon</a><a href="#">Nivea</a><a href="#">Park Avenue</a><br><a href="#"><b>Quick Links</b></a><a href="#">Combos @ Nykaa</a><a href="#">New Launches</a><a href="#">Gifts @ Nykaa</a><a href="#">Routine Finder</a><a href="#">The Gift Store</a>';
}
document.querySelector(".ten").onmouseover = function () {
  mouseOver10();
};
function mouseOver10() {
  document.getElementById("content1").innerHTML =
    '<a href="#"><b>Womens Fragrance</b></a><a href="#">Perfumes (EDT / EDP)</a><a href="#">Body Mists / Sprays</a><a href="#">Deodorants / Roll-Ons</a><br><a href="#"><b>Mens Fragrance</b></a><a href="#">Perfumes (EDT / EDP)</a><a href="#">Body Mists / Sprays</a><a href="#">Deodorants / Roll-Ons</a><a href="#">Colognes & After Shaves</a>';
  document.getElementById("content2").innerHTML =
    '<a href="#"><b>Giftsets & Combos</b></a><br><a href="#"><b>Shop By Fragrance Family</b></a><br><a href="#">Earthy & Woody</a><a href="#">Floral</a><a href="#">Fresh & Aquatic</a><a href="#">Spicy & Warm</a><a href="#">Oud Collection</a><a href="#">Fruity</a>';
  document.getElementById("content3").innerHTML =
    '<a href="#"><b>The Parcos Store</b></a><br><a href="#"><b>Candles</b></a>';
  document.getElementById("content4").innerHTML =
    '<a href="#"><b>Top Brands</b></a><a href="#">Nykaa Cosmetics</a><a href="#">Masaba By Nykaa</a><a href="#">Dior</a><a href="#">Gucci</a><a href="#">Calvin Klein</a><a href="#">Davidoff</a><a href="#">Hermes</a><a href="#">Bvlgari</a><a href="#">Versace</a><a href="#">Skinn By Titan</a><a href="#">Paco Rabanne</a><a href="#">Giorgio Armani</a>';
  document.getElementById("content5").innerHTML =
    '<a href="#"><b>PREMIUM AND DESIGNER BRANDS</b></a><a href="#">Explore All</a><a href="#">Dior</a><a href="#">Hermès</a><a href="#">Jo Malone London</a><a href="#">Guerlain</a><a href="#">BVLGARI</a><a href="#">Salvatore Ferragamo</a><a href="#">Calvin Klein</a><a href="#">Giorgio Armani</a><a href="#">Davidoff</a><a href="#">Paco Rabanne</a><a href="#">Carolina Herrera</a><a href="#">Yves Saint Laurent</a><a href="#">Elie Saab</a>';
  document.getElementById("content6").innerHTML =
    '<a href="#">Dolce & Gabbana</a><a href="#">Narciso Rodrigue</a><a href="#">Hugo Boss</a><a href="#">Montblanc</a><br><a href="#"><b>Quick Links</b></a><a href="#">Combos @ Nykaa</a><a href="#">New Launches</a><a href="#">NFBA Nominees 2020</a><a href="#">Help Me Choose - Fragrance Finder</a><a href="#">Gifts @ Nykaa</a><a href="#">The Gift Store</a>';
}
document.querySelector(".eleven").onmouseover = function () {
  mouseOver11();
};
function mouseOver11() {
  document.getElementById("content1").innerHTML =
    '<a href="#"><b>Bras</b></a><a href="#">T-Shirt Bra</a><a href="#">Padded Bra</a><a href="#">Non-Padded Bra</a><a href="#">Wireless Bra</a><a href="#">Underwired Bra</a><a href="#">Strapless Bra</a><a href="#">Bralette</a><a href="#">Push-Up Bra</a><a href="#">Beginners Bra</a><a href="#">Maternity Bra</a><br><a href="#"><b>Underwear</b></a><a href="#">Briefs</a><a href="#">Bikini</a><a href="#">Boyshorts</a><a href="#">Seamless Panties</a><a href="#">Shorties</a><a href="#">Period Panties</a>';
  document.getElementById("content2").innerHTML =
    '<a href="#"><b>Sleep & Lounge</b></a><a href="#">Sets</a><a href="#">Nightdress</a><a href="#">Babydolls</a><a href="#">Pajamas</a><a href="#">Wraps</a><a href="#">Shorts</a><a href="#">Loungewear</a><br><a href="#"><b>The Activewear</b></a><a href="#">Sports Bras</a><a href="#">Leggings</a><a href="#">Tanks & Tees</a><a href="#">Shorts</a><a href="#">Jackets & Hoodies</a><a href="#">Swimwear</a>';
  document.getElementById("content3").innerHTML =
    '<a href="#"><b>Bags</b></a><a href="#">Sling Bags</a><a href="#">Handbags</a><a href="#">Wallets</a><a href="#">Tote Bags</a><a href="#">Backpacks & Duffel Bags</a><a href="#">Satchels</a><a href="#">Clutches</a><a href="#">Laptop Bags & Sleeves</a><a href="#">Makeup Pouches & Vanity Kits</a><a href="#">Batuas & Potlis</a><br><a href="#"><b>Shapewear</b></a><a href="#">Tummy & Waist Cinchers</a><a href="#">Saree Shapewear</a><a href="#">Body Shapers</a><a href="#">Thigh Shapers</a><a href="#">Shaping Briefs</a>';
  document.getElementById("content4").innerHTML =
    '<a href="#"><b>Footwear</b></a> <a href="#">Sports Shoes & Sneakers</a> <a href="#">Sandals</a> <a href="#">Heels</a> <a href="#">Flats</a> <a href="#">Flip Flops</a> <a href="#">Wedges</a> <a href="#">Boots</a> <a href="#">Jutttis</a> <a href="#">Kolhapuris</a> <a href="#">Stilletos</a> <a href="#">Loafers</a><br> <a href="#"><b>Jewellery</b></a> <a href="#">Earrings</a> <a href="#">Necklaces</a> <a href="#">Maang Tikka</a> <a href="#">Bracelets & Bangles</a> <a href="#">Rings</a>';
  document.getElementById("content5").innerHTML =
    '<a href="#"><b>Gadgets And Tech</b></a> <a href="#">Headphones</a> <a href="#">Speakers</a> <a href="#">Smart Watches & Activity Trackers</a> <a href="#">Power Banks</a> <a href="#">Cables & Chargers</a> <a href="#">Cameras & Accessories</a> <a href="#">Smart Home Devices</a> <a href="#">Cases And Covers</a> <a href="#">Computer Peripherals</a><br> <a href="#"><b>Watches</b></a><br> <a href="#"><b>Sunglasses</b></a><br> <a href="#"><b>Home</b></a>';
  document.getElementById("content6").innerHTML =
    '<a href="#"><b>Featured Brands</b></a><a href="#">NYKD By Nykaa</a><a href="#">Twenty Dresses</a><a href="#">RSVP</a><a href="#">Pipa Bella</a><a href="#">Kica</a><a href="#">Puma</a><a href="#">Titan</a><a href="#">Eridani</a><a href="#">Lavie</a><a href="#">Giva</a><a href="#">IYKYK</a><a href="#">Twig And Twine</a><a href="#">Gajra Gang</a><a href="#">Likha</a><a href="#">Azai By Nykaa Fashion</a><a href="#">Gloot</a>';
}

document.querySelector(".image1").onmouseover = function () {
  mouseOver12();
};
function mouseOver12() {
  document.querySelector(
    ".scroll-image"
  ).innerHTML = `<img src="https://images-static.nykaa.com/media/catalog/product/9/0/90416aeSMASH00000156_0.jpg" class="img" alt="" />`;
}
document.querySelector(".image2").onmouseover = function () {
  mouseOver13();
};
function mouseOver13() {
  document.querySelector(
    ".scroll-image"
  ).innerHTML = `<img src="https://images-static.nykaa.com/media/catalog/product/9/0/90416aeSMASH00000156_4.jpg" class="img" alt="" />`;
}

document.querySelector(".image3").onmouseover = function () {
  mouseOver14();
};
function mouseOver14() {
  document.querySelector(
    ".scroll-image"
  ).innerHTML = ` <img src="https://images-static.nykaa.com/media/catalog/product/9/0/90416aeSMASH00000156_5.jpg" class="img" alt="" />`;
}

document.querySelector(".image4").onmouseover = function () {
  mouseOver15();
};
function mouseOver15() {
  document.querySelector(
    ".scroll-image"
  ).innerHTML = ` <img src="https://images-static.nykaa.com/media/catalog/product/9/0/90416aeSMASH00000156_6.jpg" class="img" alt="" />`;
}

document.querySelector(".image5").onmouseover = function () {
  mouseOver16();
};
function mouseOver16() {
  document.querySelector(
    ".scroll-image"
  ).innerHTML = `<img src="https://images-static.nykaa.com/media/catalog/product/9/0/90416aeSMASH00000156_7.jpg" class="img" alt="" />`;
}

document.querySelector(".image6").onmouseover = function () {
  mouseOver17();
};
function mouseOver17() {
  document.querySelector(
    ".scroll-image"
  ).innerHTML = `                  <img src="https://images-static.nykaa.com/media/catalog/product/9/0/90416aeSMASH00000156_0.jpg" class="img" alt=""  />`;
}
