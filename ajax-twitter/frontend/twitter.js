const FollowToggle = require('./follow_toggle');


$( ()=> {

  const $buttons = $('button.follow-toggle');
  $buttons.each( (idx, button)=> new FollowToggle(button) );

});
