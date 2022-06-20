const CollapseInitiator = {
    init({ content, navbar }) {
        // Navbar Expanding Hiden
        $('.sub').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });

        $('.dropdown-menu').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });

        $('.btn').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });

        $('#mainContent').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });

        $('footer').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });

        // Add slideDown animation to Bootstrap dropdown when expanding.
        $('.dropdown').on('show.bs.dropdown', function() {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        });

        // Add slideUp animation to Bootstrap dropdown when collapsing.
        $('.dropdown').on('hide.bs.dropdown', function() {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        });

    }
};

export default CollapseInitiator;
