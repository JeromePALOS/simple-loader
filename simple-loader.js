class Loader {
    constructor(parent = null) {
        var blocLoader = document.createElement('div');
        blocLoader.classList.add('loader');

        var eltLoader = document.createElement('div');

        blocLoader.appendChild(eltLoader);
        if(parent === null){
            document.body.prepend(blocLoader);
        }else{
            parent.prepend(blocLoader);
        }
        this.blocLoader = blocLoader;
    }

    stop() {
        this.blocLoader.remove();
    }
}
