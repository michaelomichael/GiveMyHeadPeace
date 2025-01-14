var allElements = document.querySelectorAll("*");

Array.prototype.forEach.call(allElements, function(elem) {
    var pos = window.getComputedStyle(elem).getPropertyValue('position');  
    if ('fixed' === pos  ||  'sticky' === pos)
    {
        console.log('Removing element "' + elem.id + '" which uses ' + pos + ' positioning.');
        elem.remove();
    }
});
