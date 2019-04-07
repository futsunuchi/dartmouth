from blog import app
from ai import recommend
import pandas as pd


titles=recommend('Split')
print (titles)

if __name__ == '__main__':
    app.run(debug=True)