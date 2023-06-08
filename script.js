var anc_tab = 'company';
change_tab(anc_tab);

function change_tab(name)
{
        document.getElementById('tab_'+anc_tab).className = 'tab_0 tab';
        document.getElementById('tab_'+name).className = 'tab_1 tab';
        document.getElementById('contenu_tab_'+anc_tab).style.display = 'none';
        document.getElementById('contenu_tab_'+name).style.display = 'block';
        anc_tab = name;
}
