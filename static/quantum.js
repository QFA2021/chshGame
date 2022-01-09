function measurement(t, phi){

    results = ['00', '01', '10', '11']
    result = '00'
    r = Math.random()

    if(r < p00(t, phi)){
        result = results[0]
    }else if (r >= p00(t, phi) && r < p00(t, phi) + p01(t,phi)){
        result = results[1]
    }else if(r >= p00(t, phi) + p01(t, phi) && r < p00(t, phi) + p01(t, phi) + p10(t, phi)){
        result = results[2]
    }else if (r >= 1-p11(t, phi) ){
        result = results[3]
    }
    //console.log(p00(t,phi), p01(t,phi), p10(t,phi), p11(t,phi) , result, r)
    return result
}

function p00 (t, phi){
    return Math.pow((Math.cos(t/2)*Math.cos(phi/2) + Math.sin(t/2)*Math.sin(phi/2)),2)/2
}

function p01 (t, phi){
    return Math.pow((Math.cos(t/2)*Math.sin(phi/2) - Math.sin(t/2)*Math.cos(phi/2)),2)/2
}

function p10 (t, phi){
    return Math.pow((Math.sin(t/2)*Math.cos(phi/2) - Math.cos(t/2)*Math.sin(phi/2)),2)/2
}

function p11 (t, phi){
    return Math.pow((Math.sin(t/2)*Math.sin(phi/2) + Math.cos(t/2)*Math.cos(phi/2)),2)/2
}

function oneGame(t_0, t_1, phi_0, phi_1){
    x = Math.random() <= 0.5 ? 0 : 1 
    y = Math.random() <= 0.5 ? 0 : 1
    
    dict = {'t_0': t_0, 't_1':t_1, 'phi_0': phi_0, 'phi_1': phi_1}

    t = dict['t_'+ x.toString()]
    phi = dict['phi_'+ y.toString()]
    
    result = measurement(t,  phi)

    a = parseInt(result[0])
    b = parseInt(result[1])

    win = 0 

    if( (x*y) == ((a + b)%2) ){
        win = 1
    }

    return win 

}

function nGames(t_0, t_1, phi_0, phi_1, N){
    winCounter = 0
    
    for(i=0; i< N; i++){
        win = oneGame(2* parseFloat(t_0), 2* parseFloat(t_1), 2* parseFloat(phi_0), 2* parseFloat(phi_1)) //factor of 2 varies with definiton of R_y matrix 
        winCounter += win
    }
    return winCounter / N 
}