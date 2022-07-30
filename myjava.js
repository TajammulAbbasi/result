function zakatcal(){
    let goldAmount = document.getElementById('goldValue').value;
    if (goldAmount >= 7.5 )
    {
        let goldZakat = goldAmount*120000 /40;
    document.getElementById('resultShow').innerText=goldZakat;
    } else
    {
    document.getElementById('resultShow').innerText = "zakat is not applicable";
    }
    }

    function silvercal(){
        let silverAmount = document.getElementById('silverValue').value;
        if (silverAmount >= 52.5 )
        {
            let silverZakat = silverZakat*1500 /40;
    document.getElementById('resultShow').innerText=silverAmount;
    } else
        {
        document.getElementById('resultShow').innerText = "zakat is not applicable";
        }
        }

        function cashcal(){
            let cashAmount = document.getElementById('cashValue').value;
            if (cashAmount >= 78750 )
            {
                let cashZakat = cashAmount /40;
            document.getElementById('resultShow').innerText=cashZakat;
            } else
            {
            document.getElementById('resultShow').innerText = "zakat is not applicable";
            }
            }