#pragma strict

private var grid = new Array ();

function Start () {
  for (x = 0; x < WIDTH, x++) {
    for (y = 0; y < HEIGHT; y++) {
      grid.push((Instantiate(bullet.gameObject) as GameObject).GetComponent("OTSprite"));
    }
  }
}

function Update () {

}