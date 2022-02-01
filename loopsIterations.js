// level {1}

var i, j, k;

for(i=1; i<=4; i++)
{
    for(j=1; j<=i; j++)
    Text.write(j);
    for(k=i; k>=1; k--)
    Text.write(k);
    Text.write("<br>")
}