// Saves options to chrome.storage
function save_options() {
  var alwaysShow = document.getElementById('alwaysShow').value;
  chrome.storage.sync.set({
    alwaysShow: alwaysShow,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Option saved!';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    alwaysShow: false
  }, function(items) {
    document.getElementById('alwaysShow').checked = items.alwaysShow;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('alwaysShow').addEventListener('change',
    save_options);