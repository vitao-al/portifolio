export class CustomCursor {
  constructor() {
    this.cursor = document.createElement('div');
    this.cursor.className = 'cursor';
    document.body.appendChild(this.cursor);

    this.follower = document.createElement('div');
    this.follower.className = 'cursor-follower';
    document.body.appendChild(this.follower);

    this.cursorX = 0;
    this.cursorY = 0;
    this.followerX = 0;
    this.followerY = 0;

    this.init();
  }

  init() {
    document.addEventListener('mousemove', (event) => this.onMouseMove(event));
    document.addEventListener('mouseenter', () => this.show());
    document.addEventListener('mouseleave', () => this.hide());
    this.animate();
  }

  onMouseMove(event) {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
    this.cursor.style.left = `${this.cursorX}px`;
    this.cursor.style.top = `${this.cursorY}px`;
  }

  animate() {
    const ease = 0.15;
    this.followerX += (this.cursorX - this.followerX) * ease;
    this.followerY += (this.cursorY - this.followerY) * ease;
    this.follower.style.left = `${this.followerX}px`;
    this.follower.style.top = `${this.followerY}px`;
    requestAnimationFrame(() => this.animate());
  }

  show() {
    this.cursor.classList.add('active');
  }

  hide() {
    this.cursor.classList.remove('active');
  }
}
