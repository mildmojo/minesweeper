#pragma strict

private var grid = new Array ();

public var grass_tile : Transform;
public var board_width : int;
public var board_height : int;

function Start () {
  for (var x = 0; x < board_width; x++) {
    for (var y = 0; y < board_height; y++) {
      var tile : GameObject = Instantiate(grass_tile, Vector2(x, y), Quaternion.identity) as GameObject;
      var sprite : OTSprite = tile.GetComponent('OTSprite');
      sprite.position = Vector2(x, y);
    }
  }
}

function Update () {
  // Get messages from server
  // Update game state from messages
  // Trigger messages to be sent back to server
}