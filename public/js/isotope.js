
let grid = document.querySelector('.grid');
let filtersSelect = document.querySelector('.filters-select');
let iso;
let filterValue;
let qsRegex;
let quicksearch = document.querySelector('.quicksearch');

imagesLoaded( grid, function() {
  // init Isotope after all images have loaded
  iso = new Isotope( grid, {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    percentPosition: true,

  });
});

filtersSelect.addEventListener('change', function() {
  // get filter value from option value
  filterValue = this.value;
  quicksearch.value = "";
  iso.arrange({ filter: filterValue });
});

// Quicksearch
quicksearch.addEventListener( 'keyup', debounce( function() {
  qsRegex = new RegExp( quicksearch.value, 'gi' );
  filtersSelect.value = "*"
  iso.arrange({
    filter: function( itemElem ) {
      return qsRegex ? itemElem.textContent.match( qsRegex ) : true;
    }
  });
}, 200 ) );

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}
