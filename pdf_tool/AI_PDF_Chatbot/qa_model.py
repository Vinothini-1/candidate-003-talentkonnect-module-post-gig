from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def get_answer(question, document_text):
    sentences = document_text.split(".")
    sentences = [s for s in sentences if len(s.strip()) > 5]

    vectorizer = TfidfVectorizer()
    vectors = vectorizer.fit_transform(sentences + [question])

    similarity = cosine_similarity(vectors[-1], vectors[:-1])
    best_match = similarity.argmax()

    return sentences[best_match]
