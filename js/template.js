function downloadFiles() {
    const files = ["images/template.png", "images/template.mp4"];
    files.forEach(file => {
      const a = document.createElement('a');
      a.href = file;
      a.download = '';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }
