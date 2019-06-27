class TabLink {
	constructor(link){
		this.link = link;
		this.dataAttr = this.link.dataset.tab;
	}
}
// grabing dom elements with class name of link
const links = document.querySelectorAll('.link');
// iterate over individual links 
links.forEach(tab => new TabLink(tab));

