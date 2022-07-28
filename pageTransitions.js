/**************************************************************
Page Transition Module 2022 
written by: Monica Luu
**************************************************************/

/**************************************************************
 BUTTON FUNCTION : changeMainPage()
 1.switches from landing page to blog page
**************************************************************/
function b1Switch() {
    console.log('b1Switch: switched page');
    document.getElementById("postsPage").style.display = "none";
    document.getElementById("blog_1").style.display = "block";
  };

/**************************************************************
 BUTTON FUNCTION : toTop()
 1.brings user back to the top of the page
**************************************************************/
function toTop() {
  console.log('toTop');
  document.body.scrollTop = 0; //safari
  document.documentElement.scrollTop = 0; //other browsers
};