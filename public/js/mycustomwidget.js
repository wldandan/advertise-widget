$.widget("ui.MyWidget", {
    options: {
        txtLabel: 'custom label text: ',
        initValue: 50
    },
    _create: function () {
        var
            opts = this.options,
            $this = this.element;

        // elements
        var
            divRoot = $('<div>', { 'class': 'mywid_root' }),
            spanLabel = $('<span>', { 'class': 'mywid_label' }),
            spanValue = $('<span>', { 'class': 'mywid_value' }),
            btnInc = $('<input>', { 'type': 'button', 'value': 'Increment' });

        // Construct DOM
        divRoot.appendTo($this);
        divRoot.append(spanLabel);
        divRoot.append(spanValue);
        divRoot.append('<br/>');
        divRoot.append(btnInc);
        spanLabel.html(opts.txtLabel);
        spanValue.html(opts.initValue);

        // widget functionality
        btnInc.click(function (e) {
            var ui = $this.data('ui');
            ui.value++;
            ui.spanValue.html(ui.value);
        });

        // globals for custom functions
        $this.data('ui', {
            value: opts.initValue,
            spanValue: spanValue,
            spanLabel: spanLabel
        });
    },
    // custom functions
    setValue: function (value) {
        // this is how you get the globals
        var ui = this.element.data('ui');
        ui.value = value;
        ui.spanValue.html(ui.value);
    },
    getValue: function (value) {
        var ui = this.element.data('ui');
        return ui.value;
    },
    setLabel: function (text) {
        var ui = this.element.data('ui');
        ui.spanLabel.html(text);
    }
});