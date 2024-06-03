export function checked(node) {
	
	function handleChange() {
		if (node.checked) {
			node.parentNode.classList.add('checked')
		} else {
			node.parentNode.classList.remove('checked')
		}
	}
	
	node.addEventListener('change', handleChange);
	
	return {
		destroy() {
			node.removeEventListener('change', handleChange);
		}
	}
}