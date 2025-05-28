import focusableSelectors from 'focusable-selectors'

function isVisible(el: HTMLElement) {
  return el.offsetWidth || el.offsetHeight || el.getClientRects().length
}

function getFocusableChildren(root: HTMLElement) {
  const elements = [...root.querySelectorAll<HTMLElement>(focusableSelectors.join(','))]
  return elements.filter(isVisible)
}

function trapTabKey(node: HTMLElement, event: KeyboardEvent) {
    if (!document.activeElement || !(document.activeElement instanceof HTMLElement)) {
        return;
    }
    
    const focusableChildren = getFocusableChildren(node);        
    const focusedItemIndex = focusableChildren.indexOf(document.activeElement);
    const lastIndex = focusableChildren.length - 1;
    const withShift = event.shiftKey;

    if (withShift && focusedItemIndex === 0) {
        focusableChildren[lastIndex].focus();
        event.preventDefault();
    } else if (!withShift && focusedItemIndex === lastIndex) {
        focusableChildren[0].focus();
        event.preventDefault();
    }
}

export { getFocusableChildren, trapTabKey};