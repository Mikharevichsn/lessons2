// 4 - Раскрывающийся список

const tree = document.querySelector('.tree');

tree.addEventListener('click', (event) => {
  if (!event.target.classList.contains('tree__item')) return;

  //event.target.querySelector('.tree__sub-tree')?.classList.toggle('opened');
  const subTree = event.target.querySelector('.tree__sub-tree');
  if (!subTree) return;

  if (subTree.classList.contains('opened')) {
    subTree.querySelectorAll('.tree__sub-tree').forEach((elem) => {
      elem.classList.remove('opened');
    });
  }

  subTree.classList.toggle('opened');
});
