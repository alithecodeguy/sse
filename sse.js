var source;

function start() {
  if (typeof EventSource !== "undefined") {
    var source = new EventSource("event_source.php");
    // source = new EventSource("https://ds.shub.dev/e/temperatures");
    source.onmessage = function (event) {
      document.getElementById("result").innerHTML += event.data + "<br>";
    };

    source.onopen = function (e) {
      console.log("Event: open");
    };

    source.onerror = function (e) {
      console.log("Event: error");
      if (this.readyState == EventSource.CONNECTING) {
        console.log(`Reconnecting (readyState=${this.readyState})...`);
      } else {
        console.log("Error has occured.");
      }
    };
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, your browser does not support server-sent events...";
  }
}

function stop() {
  // when "Stop" button pressed
  source.close();
  console.log("eventSource.close()");
}
