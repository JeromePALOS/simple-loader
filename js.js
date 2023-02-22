class Loading {
    constructor() {
        var blocLoader = document.createElement('div');
        blocLoader.classList.add('loader');
        blocLoader.innerHTML = 'e';

        var eltLoader = document.createElement('div');

        blocLoader.appendChild(eltLoader)
        document.body.prepend(blocLoader);
        this.blocLoader = blocLoader;
    }

    stop() {
        this.blocLoader.remove();
    }
}
