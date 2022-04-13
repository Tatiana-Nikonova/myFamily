//Таб главный

$(function() {
	let tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('#tabs .tabs-nav a.nav__link').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .tabs-nav a.nav__link').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('#tabs .tabs-nav a.nav__link[href=' + $(this).attr('href')+ ']').click();
	});
	
	// Отрытие вкладки из хеша URL
	if(window.location.hash){
		$('#tabs-nav a.nav__link[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#" . window.location.hash).offset().top);
	}
});


// Таб второстепенный

const tabs = document.querySelectorAll(".tab ");
const contents = document.querySelectorAll(".tab__content");

function activeTab(index) {
	
	for (let tab of tabs) {
		tab.classList.remove("tab_active");
	};
	tabs[index].classList.add("tab_active");
	
};

function activeContent(index) {
	for (let content of contents) {
		content.classList.remove("tab__content_active");
	};
	contents[index].classList.add("tab__content_active");
};

tabs.forEach((item, ind) => {
	item.onclick = () => {		
		activeTab(ind);
		activeContent(ind);
		return false;
	};
});