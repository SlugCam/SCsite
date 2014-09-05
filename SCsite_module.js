var _ = require('underscore');

// This function takes the content tree and generates the ordered list of pages
// that should go in the nav bar. Used in layout.jade in the templates
exports.getNavPageList = function(contents) {
    var x
    x = _.chain(contents)
        .filter(function(c) {
            return c.metadata && !_.isUndefined(c.metadata.navOrder);
        })
        .sortBy(function (c) {
            console.log(c.metadata.navOrder);
            return c.metadata.navOrder;    
        })
        .value();
    return x;

}
