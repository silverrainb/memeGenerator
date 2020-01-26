document.addEventListener("DOMContentLoaded", function(event) {
    // assign convenient variables
    const generate = document.querySelector('#generate')
    const display = document.querySelector('#display')

    // Generate Image =======================================================
    generate.addEventListener('click', function(){
        //  select queries
        let img = document.forms[0].querySelector('input[name="imgUrl"]')
        let topText = document.forms[0].querySelector('input[name="topText"]')
        let bottomText = document.forms[0].querySelector('input[name="bottomText"]')

        // Create elements
        const item = document.createElement('div')
        item.classList.add('item')
        let newImg = document.createElement('img');
        let topTextAppend = document.createElement('h2');
        let bottomTextAppend = document.createElement('h2');

        // Add a class to a image
        newImg.classList.add('memeImg')

        // Set img source =====================================================
        newImg.setAttribute('src', img.value)

        // Set Texts ==========================================================
        function setText(){
            topTextAppend.append(topText.value.toUpperCase())
            topTextAppend.classList.add('topText')
            bottomTextAppend.append(bottomText.value.toUpperCase())
            bottomTextAppend.classList.add('bottomText')
            // console.log(topTextAppend.innerText, bottomTextAppend.innerText)
        }
        setText();

        // Append to div #display ============================================
        display.appendChild(item)
        function append(){
            item.append(newImg)
            item.append(topTextAppend)
            item.append(bottomTextAppend)
        }
        append();

        // Empty input box ====================================================
        img.value = ""
        topText.value = ""
        bottomText.value= ""

        // Remove Image =======================================================
        item.addEventListener('click', function(e){
            // when clicked, add class "selected"
            this.classList.add('selected')
            // remove the image that has class "selected"
            let deleteImg = document.querySelector('.selected')
            deleteImg.remove()
        })
    })
});

