class Header{
    selector = {
        root: '[data-js-header]',
        overlay: '[data-js-overlay]',
        burger: '[data-js-burger]',
    }
    
    stateClass={
        isOpen:'is-open',
        isLock: 'is-lock'
    }



    constructor(){
        this.rootElement = document.querySelector(this.selector.root),
        this.overlayElement = this.rootElement.querySelector(this.selector.overlay)
        this.burgerElement = this.rootElement.querySelector(this.selector.burger)
        this.onBurger()
        this.observer()

    }

    toggleClass(){
        this.burgerElement.classList.toggle(this.stateClass.isOpen)
        this.overlayElement.classList.toggle(this.stateClass.isOpen)
        document.documentElement.classList.toggle(this.stateClass.isLock)

    }

    overlayClose(e){
            if(e.target.classList.contains('is-open'))
            this.toggleClass()
    }

    onBurger = ()=>{
        this.burgerElement.addEventListener('click',()=> this.toggleClass())
        this.overlayElement.addEventListener('click',(e)=>this.overlayClose(e))
    }


    callback=(entries)=>{
        entries.forEach(entry=>{
            if(!entry.isIntersecting){
                this.rootElement.classList.add('box-shadow-bottom')
            }
            else{
                this.rootElement.classList.remove('box-shadow-bottom')
            }
        })
    }

    observer(){
        const hero_subtitle = document.querySelector('.hero-subtitle')
        
        const options = {
            root:null,
            threshold: 0,
        }

        const observer = new IntersectionObserver(this.callback, options)

        observer.observe(hero_subtitle)
        
    }

}


new Header()



