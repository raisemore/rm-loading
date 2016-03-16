import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rm-loading', 'Integration | Component | rm loading', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{rm-loading}}`);
  assert.equal(this.$('.rm-loading-container').length, 1);
  assert.equal(this.$('.rm-loading-bar').length, 3);
});
