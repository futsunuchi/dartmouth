import pandas as pd


metadata=pd.read_csv('IMDB-Movie-Data.csv', low_memory=False)
metadata.head(3)

c=metadata['Rating'].mean()
print(c)

m=metadata['Votes'].quantile(0.90)
print(m)

q_movies=metadata.copy().loc[metadata['Votes']>=m]
q_movies.shape

metadata['Description'].head()



from sklearn.feature_extraction.text import TfidfVectorizer
tfidf=TfidfVectorizer(stop_words='english')
metadata['Description']=metadata['Description'].fillna('')

tfidf_matrix=tfidf.fit_transform(metadata['Description'])
tfidf_matrix.shape



from sklearn.metrics.pairwise import linear_kernel
cosine_sim=linear_kernel(tfidf_matrix, tfidf_matrix)

indices=pd.Series(metadata.index, index=metadata['Title']).drop_duplicates()

def recommend(Title, cosine_sim=cosine_sim):
    index=indices[Title]
    sim_scores=list(enumerate(cosine_sim[index]))
    sim_scores=sorted(sim_scores, key=lambda x:x[1], reverse=True)
    sim_scores=sim_scores[1:11]
    movie_indices=[i[0] for i in sim_scores]
    return metadata['Title'].iloc[movie_indices]
	
