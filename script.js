	//Replace what is in the single quotes with the content for previp trial
var contentPreVIPTrial = 'It was so nice to meet name today! He is a hard working student. He speaks very well! He could repeat all of the words and letters. He is young and learning this type of classroom. I am impressed at how quickly name learns! The teachers here are all kind and friendly. He will feel comfortable to learn English.  Excellent 5 star job! I think with practice in this type of setting, name will rapidly advance in the program. I think starting at a young age gives name a big advantage. name is an excellent candidate for VIPKID.'

//Replace what is in the single quotes with the content for nonreader trial
var contentNonreaderTrial = 'It was so nice to meet name today! He is a hard working student. He speaks very well! He could repeat all of the words and letters. He is young and learning this type of classroom. I am impressed at how quickly name learns! The teachers here are all kind and friendly. He will feel comfortable to learn English. Excellent 5 star job! I think with practice in this type of setting, he will rapidly advance in the program. I think starting at a young age is a big advantage. name is an excellent candidate for VIPKID. Excellent 5 star job!'

//Replace what is in the single quotes with the content for reader trial
var contentReaderTrial = 'It was so nice to meet name today! He is a hard working student. name speaks very well! He could repeat all of the words and sentences. name did a good job with reading. Practice speaking with a native speaker will help name make fast progress with pronunciation. The teachers here are all kind and friendly. He will feel comfortable to expand on already good English. Excellent 5 star job! I think with practice in this type of setting he will rapidly advance in the program. name is an excellent candidate for VIPKID. Excellent 5 star job!'

//Replace what is in the single quotes with the content for MC previp
var contentMCPreVIP = 'It is nice to meet adorable name. He participates fully in class. He can practice putting "a" in front of nouns. "I see a cat". name knows all of the letters and can match big to small. He can put together sentences with the help of the teacher. "I draw a line. I love Dino". name sang three songs today!! Great 5 happy star job today.'

//Replace what is in the single quotes with the content for level 1
var contentLevel1 = 'It is nice to meet adorable name. He participates fully in class. name can practice putting "a" in front of nouns. "I see a cat". name knows all of the letters and can match big to small. He can put together sentences with the help of the teacher. " I draw a line. I love Dino". He sang three songs today!! Great 5 happy star job today.'

//Replace what is in the single quotes with the content for level 2
var contentLevel2 = 'It was very nice to see name today! He is progressing well in understanding English. He could say and read everything very well!. Excellent job. When working at home, name could underline the first letter of words in the workbook to help associate letters in addition to pictures with the words. This will help with reading. Excellent 5 happy stars today! Keep working hard name!'

//Replace what is in the single quotes with the content for level 3
var contentLevel3 = 'It was very nice to see name today! name is a wonderful speaker! He knows all of the lesson vocabulary. He can deepen English language understanding with conversation which name did so well today. Great work with all of the grammar and vocabulary too! He can speak in full sentences. He answered lots of questions. name did a good job correcting errors when encouraged. Overall a great job--5 happy stars today!'

//Replace what is in the single quotes with the content for level 4
var contentLevel4 = 'name is a wonderful reader. Wow - name is reading so fast. He also knows all of the vocabulary very well. He can deepen English language understanding with conversation which name did so well today. He answered lots of questions and used complete sentences in the answers. name could practice reading aloud between lessons to help with fluency.  So nice to see name today. 5 super stars!'

//Replace what is in the single quotes with the content for level 5
var contentLevel5 = ['Content Level 5']

//Replace what is in the single quotes with the content for level 6
var contentLevel6 = ['Content Level 6']

var endingSentences = ['See you again soon!']

var sampleSentencesL1 = ['boy is progressing so well in speaking.', 'boy is listening, paying attention, and repeating very well.', 
'boy can circle first letters of words to help with reading.', 'boy understood all of the directions and circled all of the answers correctly too.', 
'Keep working hard.', 'Great job this lesson.', 'boy is progressing well in understanding.', 'boy can follow the directions easily.', 'boy repeats well after teacher.',
'boy is able to interact with the teacher repeating the words and sounds very well.', 'Excellent 5 happy star job!']

var sampleSentencesL2 = ['boy is progressing well in understanding.', 'boy can follow the directions easily.', 'boy repeats well after teacher.',
'boy is able to interact with the teacher repeating the words and sounds very well.', 'Excellent 5 happy star job!', 'boy is progressing so well in speaking.', 
'boy is listening, paying attention, and repeating very well.', 'boy can circle first letters of words to help with reading.', 
'boy understood all of the directions and circled all of the answers correctly too', 'Wow. Keep working hard.', 
'boy is creating own sentences expressing own ideas using correct grammar.']

var sampleSentencesL3 = ['5 happy stars today! ', 'boy is progressing well in understanding.', 'boy is a wonderful reader.', 'boy knows all of the lesson vocabulary.',
'boy can deepen language understanding with conversation which was done so well today.', ' boy is wonderful and hardworking and I see progress throughout the class.',
'Wow - reading so fast.', 'boy is an exceptional student.', 'I can see that boy is working very hard on his English.', 'Congratulations on a great assessment.',
'boy spoke very well.', 'boy did a very good job today.']


var sampleSentencesL4 = ['5 happy stars today! ', 'boy is progressing well in understanding.', ' boy is wonderful and hardworking and I see progress throughout the class.',
'boy is an exceptional student', 'I can see that boy is working very hard on his English.', 'Congratulations on a great assessment.']

var sampleSentencesTrial = ['It was so nice to meet you today.', 'boy is a hardworking student.', 'boy could repeat all of the words and sentences.', 'Excellent 5 star job.', 
'I think boy could continue to rapidly advance in English with VIPKID.', 'I think starting at a young age gives a big advantage.', 'boy is an excellent candidate for VIPKID.']



function generateReview(gender, name, content)
{
	content = content.replace(/name/g, name)
	if (gender == 'She')
	{
		content = content.replace(/He/g, 'She')
	}
	var review = content + endingSentences
	var premadesDiv = document.getElementById('premades')
	var reviewString = "<div class = 'review'><textarea rows='7' cols='90'>" + review + "</textarea></div>"
	premadesDiv.innerHTML += reviewString
}


function createRandomizedReview(gender, name, sampleSentences)
{
	var review = {title: '', text: ''};
	var i = 0;
	var usedIndexes = []
	while (review.text.split(' ').length < 50)
	{
		var randomIndex = Math.floor(Math.random() * sampleSentences.length);
		if (!usedIndexes.includes(randomIndex))
		{
			usedIndexes.push(randomIndex)
			var randomSentence = sampleSentences[randomIndex];
			if (i % 2 == 0)
			{
				randomSentence = randomSentence.replace('boy', gender)
				console.log(randomSentence)

			}
			else
			{
				randomSentence = randomSentence.replace('boy', name)
			}
			console.log(randomSentence)
			console.log(randomSentence.replace('boy', gender))
			review.text += randomSentence;
			review.text += ' '
			i += 1
		}
	}
	review.text += endingSentences[Math.floor(Math.random() * endingSentences.length)]
	viewReview(review)
	return review;
}




function viewReview(review)
{
	var premadesDiv = document.getElementById('premades')
	var reviewString = "<div class = 'review'><textarea rows='7' cols='90'>" + review.title + ' ' + review.text + "</textarea></div>"
	premadesDiv.innerHTML += reviewString
}

function display()
{
	var form = document.getElementById("formL1");
	console.log(form.gender)
	var sampleSentences = ''
	console.log(form.level.value)
	switch (form.level.value)
	{
		case '1':
			generateReview(form.gender.value, form.name.value, contentLevel1);
			break;
		case '2':
			generateReview(form.gender.value, form.name.value, contentLevel2);
			break;
		case '3':
			generateReview(form.gender.value, form.name.value, contentLevel3);
			break;
		case '4':
			generateReview(form.gender.value, form.name.value, contentLevel4);
			break;
		case '5':
			generateReview(form.gender.value, form.name.value, contentLevel5);
			break;
		case '6':
			generateReview(form.gender.value, form.name.value, contentLevel6);
			break;
		case '7':
			generateReview(form.gender.value, form.name.value, contentPreVIPTrial);
			break;
		case '8':
			generateReview(form.gender.value, form.name.value, contentNonreaderTrial);
			break;
		case '9':
			generateReview(form.gender.value, form.name.value, contentReaderTrial);
			break;
		case '10':
			generateReview(form.gender.value, form.name.value, contentMCPreVIP);
			break;
		default:
			//createRandomizedReview(form.gender.value, form.name.value, endingSentences);
			break;
	}

	console.log(sampleSentences)
}

function generate()
{
	var form = document.getElementById("formL1");
	console.log(form.gender)
	var sampleSentences = ''
	console.log(form.level.value)
	switch (form.level.value)
	{
		case '1':
			createRandomizedReview(form.gender.value, form.name.value, sampleSentencesL1);
			break;
		case '2':
			createRandomizedReview(form.gender.value, form.name.value, sampleSentencesL2);
			break;
		case '3':
			createRandomizedReview(form.gender.value, form.name.value, sampleSentencesL3);
			break;
		case '4':
			createRandomizedReview(form.gender.value, form.name.value, sampleSentencesL4);
			break;
		default:
			createRandomizedReview(form.gender.value, form.name.value, sampleSentencesTrial);
			break;
	}

	console.log(sampleSentences)
}



document.addEventListener('DOMContentLoaded', function()
{
	//var random1 = createRandomizedReview('He', 'Jimmy', sampleSentencesL1)
});
