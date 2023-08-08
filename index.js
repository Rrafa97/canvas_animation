

window.addEventListener('load', function () {
    const canvas = document.getElementById('canvasInd');
    const context = canvas.getContext('2d');
    context.width = 50;
    context.height = 50;

    class Dog {
        constructor(animation) {
            this.animation = animation;
            this.width = 50;
            this.height = 50;
            this.x = 0;
            this.y = this.animation.height - this.height;
            this.img = document.getElementById('dog');
        }
        updated() {

        }
        draw(context) {
            context.fillStyle = '#f5f5f5';
            context.fillRect(this.x, this.y, this.width, this.height);
            context.drawImage(this.img, this.x, this.y);
        }
    }

    class Animation {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.dog = new Dog(this);
        }
        updated() {
        }
        draw(ctx) {
            this.dog.draw(ctx);
        }
    }

    const animation = new Animation(context.width, context.height);
    function animate() {
        animation.draw(context);
        requestAnimationFrame(animate);
    }

    animate();
});