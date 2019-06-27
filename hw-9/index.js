//PART 1
function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ||
					document.body.appendChild (
           				 document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
	Array.from (message)
		.forEach((letter, index) => setTimeout ( 
			()=> container.textContent += letter, 
				index * velocity * 1000 )
			)
}

typeMessage ( `Welcome to the hell`, 1 )

//PART 2
var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) {
                var user = users.find(user => userName === user.name)
				user && (user.present = !!present)
            },
            showPresent () {
				users.filter(user => user.present === true)
					.forEach(user => console.log(user.name))
            },
            showAbsent () {
				users.filter(user => user.present === false) 
					.forEach(user => console.log(user.name))
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()
users.setUserPresent( "Иван", "+" )
users.setUserPresent( "Михаил", "присутствовал" )
users.setUserPresent( "Степан", true )

users.showPresent()

//PART 3
let changeClass = ( classname, styleString ) => ( Array.from ( document.styleSheets )
    .filter ( sheet => !sheet.href )
        .map (
            sheet => Array.from ( sheet.cssRules )
                    .filter ( rule => rule.selectorText === `.${classname}` )
        )
           .filter ( item => item.length > 0 )
               .map ( item => item[0].cssText.split ("}")
                           .join ( `${styleString}}` )
               )
).length > 0 ? console.log ( "found" ) : 
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = `.${classname} {${styleString}}`

changeClass ( "graf", "background-color: red!important;" )