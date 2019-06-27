class TabLink {
	constructor(tabElement){
		//this.tabElementProperty = tabElement to have reference to it later
		this.tabElementProperty = tabElement;

		//reference to data attribute number using dataset.tab at end
		this.tabNumber = this.tabElementProperty.dataset.tab;

		//reference to content specific to its dataset tab value
		this.content = document.querySelector(`div.content[data-tab="${this.tabNumber}"]`);
		
		//eventlistener on this.tabElementProperty element 
		//and toggle class name from this.content
		this.tabElementProperty.addEventListener('click', () => {
			this.content.classList.toggle('change');
		})

	}

}
// grabing dom elements with class name of link
const tabs = document.querySelectorAll('.link');
// iterate over individual links 
tabs.forEach(tab => new TabLink(tab));

