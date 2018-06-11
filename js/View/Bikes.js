/**
 * Responsible for everything that has to do with the Bikes page.
 */
class Bikes {
    static get Template() {
        return this.template;
    }

    static set Template(value) {
        this.template = value;
    }

    static get Modal() {
        return this.modal;
    }

    static set Modal(value) {
        this.modal = value;
    }

    static SetupUserInterface() {
        let modalElement = document.getElementById('bicycleSpecsModal');

        Bikes.Template = document.getElementById('bicycle-product');
        Bikes.Modal = {
            element: modalElement,
            title: modalElement.querySelector('#bicycle-product-title'),
            content: modalElement.getElementsByClassName('modal-body')[0]
        };

        // TODO: Remove the line below when done testing.
        Bike.CreateTestData();

        Bikes.PopulateWithProducts();
    }

    /**
    * Populates a node with all bicycle products
    */
    static PopulateWithProducts() {
        let bikeInstanceKeys = Object.keys(Bike.Instances);

        for (let i = 0; i < bikeInstanceKeys.length; i++) {
            const bike = Bike.Instances[bikeInstanceKeys[i]];

            let productClone = document.importNode(Bikes.Template.content, true);

            let productData = {
                title: productClone.querySelector('.card-title'),
                thumbnail: productClone.querySelector('img'),
                price: productClone.querySelector('.bike-price'),
                colorsParent: productClone.querySelector('.bike-colors'),
                seeSpecsBtn: productClone.querySelector('button')
            }

            productData.title.innerHTML = bike.Name;
            productData.thumbnail.setAttribute('src', bike.ThumbnailUrl);
            productData.price.innerHTML = bike.Price.toString().concat(" DKK");
            
            // Create bike colors
            this._CreateBikeColors(bike.Colors, productData.colorsParent);

            productData.seeSpecsBtn.addEventListener('click', function(){
                Bikes.RefreshSpecsModal(bike);
            });

            document.querySelector('.products-list').appendChild(productClone);
        }
    }

    /**
     * Appends available colors to the specified node.
     * @param {string[]} colors A string array of colors in HEX format.
     * @param {Node} parent The node the colors should be appended to
     */
    static _CreateBikeColors(colors, parent){
        for (let i = 0; i < colors.length; i++) {
            const colorHex = colors[i];
            
            // Get template
            let bikeColorTemplate = parent.querySelector('#bike-color');
    
            // Import node
            let templateClone = document.importNode(bikeColorTemplate.content, true);

            // Append colors to specified node.
            parent.appendChild(templateClone);
            
            // Set color of the element
            let bikeColors = parent.querySelectorAll('a');
            bikeColors[bikeColors.length - 1].style.backgroundColor = colorHex;
        }
    }

    /**
     * Refreshes the modal data with the bike's specs.
     * @param {Bike} bike The instance of the bike.
     */
    static RefreshSpecsModal(bike) {
        Bikes.Modal.title.innerHTML = bike.Name;
        
        let bikeSpecKeys = Object.keys(bike.Specs);
        let bikeSpecsHtml = '';
        for (let i = 0; i < bikeSpecKeys.length; i++) {
            const key = bikeSpecKeys[i];
            bikeSpecsHtml = '<p class="font-weight-bold spec-title">'.concat(bike.Specs[key].title ,'</p><p class="spec-description ml-2">', bike.Specs[key].description ,'</p>');
        }

        if(bikeSpecKeys.length == 0){
            Bikes.Modal.content.innerHTML = 'No description.';
        }
        else{
            Bikes.Modal.content.innerHTML = bikeSpecsHtml;
        }
    }
}