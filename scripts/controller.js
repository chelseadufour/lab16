var app = angular.module('postApp');

app.controller('feedCtrl', function($scope){
  $scope.postArray = [
  {
    title: 'Post Title One',
    author: 'A. Conan Doyle',
    image: {
      path: "images/doyle.jpg",
      alt: "Arthur Conan Doyle"
    },
    text: "Quote about Arthur Conan Doyle",
    comments: ['What a fantastic author!', 'Classic masterpieces', 'Prolific canon']
  },

  {
    title: 'Post 2',
    author: 'Batman',
    image: {
      path: "#",
      alt: ""
    },
    text: "Bleghbleghvomit my furball really tie the room together destroy the blinds, cat snacks. Attack the dog then pretend like nothing happened eat and than sleep on your face eat the fat cats food, and plan steps for world domination. Sit on human need to chase tail, so hide at bottom of staircase to trip human yet this human feeds me, i should be a god, eat and than sleep on your face. Stare at wall turn and meow stare at wall some more meow again continue staring stare at the wall, play with food and get confused by dust jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed sit on the laptop. Mew hide when guests come over mew lick sellotape stare at the wall, play with food and get confused by dust, but thinking longingly about tuna brine, or put butt in owner's face. Slap owner's face at 5am until human fills food dish fall asleep on the washing machine present belly, scratch hand when stroked yet kick up litter for shake treat bag, but thinking longingly about tuna brine. If it fits, i sits leave dead animals as gifts, and leave hair everywhere, so kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff hunt anything that moves, and stare at ceiling light ears back wide eyed. Kitty loves pigs.",
    comments: ['awesome comment', 'way to go grrrl', 'YOU GOT THIS']
  },
  {
    title: 'Post 3',
    author: 'Wonder Woman',
    image: {
      path: "#",
      alt: ""
    },
    text:'A',
    comments: ['awesome comment', 'way to go grrrl', 'YOU GOT THIS']
  }
];
});
