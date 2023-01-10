/* let result = 0;
const average = (...args)=>{
    args.forEach(function (value) {
        result += value;
    });
    result = result / args.length
    console.log(result);
};

average(-100,100);
 */


/* const html = (arg1, arg2)=>{    
    const amp = arg2.replace(/&/g,'&amp;');
    const apos = amp.replace(/'/g,'&apos;');
    const dobleC = apos.replace(/"/g,'&lt;');
    const aper = dobleC.replace(/</g,'&quot;');
    const cierre = aper.replace(/>/g,'&quot;');
    return `${arg1} ${cierre}`;
}; */

//console.log(html('<b>Carlos says:</b>', 'It\'s kind of hard to find quotes with &s in them!\\\"'));


function html(pieces, ...substitutions) {
    var result = pieces[0];
    for (var i = 0; i < substitutions.length; ++i) {
        console.log(pieces);
        console.log(substitutions[i]);
        //result += escape(substitutions[i]) + pieces[i + 1];
        
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

console.log(html('<b>Carlos says:</b>', 'It\'s kind of hard to find quotes with &s in them!\\\"'));