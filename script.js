//Replace what is in the single quotes with the content for previp trial
var contentPreVIPTrial = ['Content PreVIP Trial']

//Replace what is in the single quotes with the content for nonreader trial
var contentNonreaderTrial = ['Content Nonreader Trial']

//Replace what is in the single quotes with the content for reader trial
var contentReaderTrial = ['Content Reader Trial']

//Replace what is in the single quotes with the content for MC previp
var contentMCPreVIP = ['Content Level 1']

//Replace what is in the single quotes with the content for level 1
var contentLevel1 = ['Content Level 1']

//Replace what is in the single quotes with the content for level 2
var contentLevel2 = ['Content Level 2']

//Replace what is in the single quotes with the content for level 3
var contentLevel3 = ['Content Level 3']

//Replace what is in the single quotes with the content for level 4
var contentLevel4 = ['Content Level 4']

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
