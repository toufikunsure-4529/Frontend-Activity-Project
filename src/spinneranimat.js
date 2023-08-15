/* cursol animation after page loaded */
document.addEventListener("DOMContentLoaded",function(){
  const loadingAnimation=document.getElementById("loading-animation")
  const contentPlaceholder=document.getElementById("content-placeholder")

      // Simulate a delay for demonstration purposes
  setTimeout(function(){
    loadingAnimation.style.display="none"
    contentPlaceholder.style.display="block"
    function loadContent(){
      const newElement=document.createElement("p")
      contentPlaceholder.appendChild(newElement)
    }
            // Call the loadContent function to load dynamic content
    loadContent();
  },2000) // Simulating a 2-second delay, adjust as needed
})
