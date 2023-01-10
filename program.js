const html = (arg1, arg2)=>{    
    const amp = arg2.replace(/&/g,'&amp;');
    const apos = amp.replace(/'/g,'&apos;');
    const dobleC = apos.replace(/"/g,'&quot;');
    const aper = dobleC.replace(/</g,'&lt;');
    const cierre = aper.replace(/>/g,'&gt;');
    const reemplazarC = arg1.replace(/'/g,'&apos;');
    const reemplazarCD = reemplazarC.replace(/"/g,'&quot;');
    return `${reemplazarCD} \"${cierre}\"`;    
};

console.log(html(`<b>${process.argv[2]} says</b>:`,`${process.argv[3]}`));




/*

Your solution to TAGGED TEMPLATE STRINGS passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

    function html(pieces, ...substitutions) {
        var result = pieces[0];
        for (var i = 0; i < substitutions.length; ++i) {
            result += escape(substitutions[i]) + pieces[i + 1];
        }

        return result;
    }

    function escape(s) {
        return s.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/'/g, "&apos;")
                .replace(/"/g, "&quot;");
    }
*/