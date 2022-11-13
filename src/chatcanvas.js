//imports?

/* code from the spawnPoints test */
const ptContainer = document.getElementById("pt-container");

// if (debug) {
//     ptContainer.addEventListener('mousemove', logMouseCoords);
// }

ptContainer.addEventListener('click', spawnPoint);

function spawnPoint(e) {
    if (e.target !== ptContainer) {
        console.log('target:', e.target);
        return;
    }

    if (e.offsetX < ptContainer.offsetWidth && e.offsetY < ptContainer.offsetHeight) {
        console.log('Event Offset X, Y: ', e.offsetX, e.offsetY);
        // points use absolute postitioning
        const point = document.createElement('div'); //should be a component though
        point.addEventListener('click', pointClicked);
        point.classList.add('point');
        point.name = `${e.offsetX}-${e.offsetY}`;
        point.style.top = (e.offsetY - 8) + 'px';
        point.style.left = (e.offsetX - 8) + 'px';
        ptContainer.appendChild(point);
    }
}

function pointClicked(e) {
    e.stopPropagation();

    let point = e.target;
    console.log('Point clicked:', point.name);

    point.classList.add('active');
    
    //should open a menu but for now - remove the point
    setTimeout(() => {
        ptContainer.removeChild(point);
    }, 1200);
}